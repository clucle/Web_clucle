import React, {Component} from 'react';

class ContactCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            commit: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick() {
        const contact = {
            name: this.state.name,
            commit: this.state.commit
        };
        this.props.onCreate(contact);
        this.setState({
            name: '',
            commit: '',
        })
    }

    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="commit"
                        placeholder="commit"
                        value={this.state.commit}
                        onChange={this.handleChange}
                    />
                </p>

                <button onClick={this.handleClick}>Create</button>
            </div>
        );
    }
};

ContactCreate.defaultProps = {
    onCreate: () => { console.error('onCreate not found'); }
};

export default ContactCreate;
