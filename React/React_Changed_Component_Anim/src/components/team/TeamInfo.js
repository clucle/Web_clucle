import React, {Component} from 'react';

class TeamInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prevName: this.props.team.name
        };
    }

    render() {
        var infoStyle = {
            top: this.props.height,
            position: 'absolute'
        };
        if (this.state.prevName !== this.props.team.name) {
            this.state.prevName = this.props.team.name;
            console.log(this.state.prevName);
            infoStyle.animation = '1s ease-out 0s 1 slideInFromRight';
        }

        return(
            <div
                className="info"
                style={infoStyle}//{{top: this.props.height, position: 'absolute'}}
                onClick={this.props.onClick}>
                {this.props.team.name} {this.props.team.commit}
            </div>
        );
    }
}

export default TeamInfo;
