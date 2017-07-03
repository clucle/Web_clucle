import React, {Component} from 'react';

class ContactDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            commit: ''
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleToggle() {
        if (!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                commit: this.props.contact.commit
            })
        } else {
            this.handleEdit();
        }
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleEdit() {
        this.props.onEdit(this.state.name, this.state.commit);
    }

    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.commit}</p>

            </div>
        );

        const edit = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>

                <p>
                    <input
                        type="text"
                        name="commit"
                        placeholder="commit"
                        value={this.state.commit}
                        onChange={this.handleChange}
                    />
                </p>
            </div>
        );

        const view = this.state.isEdit ? edit : details;

        const blank = (<div>Not Selected</div>);

        return(
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view: blank}
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit ? 'OK' : 'Edit'}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        commit: 0
    },
    onRemove: () => { console.log('onRemove not defined'); },
    onEdit: () => { console.log('onRemove not defined'); }
}

export default ContactDetails;
