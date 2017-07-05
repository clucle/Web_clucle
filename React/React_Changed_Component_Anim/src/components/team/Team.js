import React, {Component} from 'react';
import TeamInfo from './TeamInfo';
import TeamDetails from './TeamDetails';
import update from 'react-addons-update';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            teamData: [{
                name: 'Team1',
                commit: 3
            }, {
                name: 'Team2',
                commit: 6
            },{
                name: 'Team3',
                commit: 7
            },{
                name: 'Team4',
                commit: 8
            },{
                name: 'Team5',
                commit: 9
            },{
                name: 'Team6',
                commit: 10
            }]
        }
        // this가 뭔지 알려줌
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

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


    handleRemove() {
        if (this.state.selectedKey < 0) {
            return;
        }
        this.setState({
            teamData: update(this.state.teamData,
                { $splice: [[this.state.selectedKey, 1]] }
            ),
            selectedKey: -1
        })
    }
    handleEdit(name, commit) {
        this.setState({
            teamData: update(this.state.teamData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        commit: { $set: commit }
                    }
                }
            ),
            selectedKey: -1
        });
    }

    render() {
        const mapToComponents = (data) => {
            data.sort(function(a, b) {
                return b.commit - a.commit;
            });
            data = data.filter(
                (team) => {
                    return team.name.toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((team, i) => {
                return (<TeamInfo
                    team={team}
                    key={i}
                    height={i * 50}
                    onClick={() => this.handleClick(i)}/>);
            });
        };

        return (
            <team>
                <h1>teams</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />

                <TeamDetails
                    isSelected={this.state.selectedKey !== -1}
                    team={this.state.teamData[this.state.selectedKey]}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                />
                <div style={{margin: '200px'}}>{mapToComponents(this.state.teamData)}</div>
            </team>
        );
    }
}

export default Team;
