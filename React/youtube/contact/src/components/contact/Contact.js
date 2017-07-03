import React, {Component} from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
import update from 'react-addons-update';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [{
                name: 'Team1',
                commit: 3
            }, {
                name: 'Team2',
                commit: 6
            }]
        }
        // this가 뭔지 알려줌
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    // 상태가 변할 때
    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectedKey: key
        });
    }

    handleCreate(contact) {
        this.setState({
            contactData: update(this.state.contactData, { $push: [contact] })
        });
    }
    handleRemove() {
        if (this.state.selectedKey < 0) {
            return;
        }
        this.setState({
            contactData: update(this.state.contactData,
                { $splice: [[this.state.selectedKey, 1]] }
            ),
            selectedKey: -1
        })
    }
    handleEdit(name, commit) {
        this.setState({
            contactData: update(this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        commit: { $set: commit }
                    }
                }
            )
        });
    }

    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((contact, i) => {
                return (<ContactInfo
                    contact={contact}
                    key={i}
                    onClick={() => this.handleClick(i)}/>);
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails
                    isSelected={this.state.selectedKey !== -1}
                    contact={this.state.contactData[this.state.selectedKey]}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                />
                <ContactCreate
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

export default Contact;
