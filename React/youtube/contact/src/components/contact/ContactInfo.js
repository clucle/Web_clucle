import React, {Component} from 'react';

class ContactInfo extends Component {
    render() {
        return(
            <div onClick={this.props.onClick}>{this.props.contact.name} {this.props.contact.commit}</div>
        );
    }
}

export default ContactInfo;
