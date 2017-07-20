var SocketTest = React.createClass({
	getInitialState: function() {
		return {
			msg: null
		};
	},
	componentDidMount: function () {
		var that = this;
		this.socket = io();
		this.socket.on('connectedPerson', function(data) {
			that.setState({msg: data.id});
		});
		this.socket.on('broadcast', function(data) {
			that.setState({msg: data.msg});
		});
	},
	render: function() {
		return (
			<div className="SocketTest">
				<h3>{ this.state.msg }</h3>
			</div>
		);
	}
});

React.render(
	<SocketTest/>,
	document.getElementById('root')
);