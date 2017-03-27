'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      value: 0
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  Counter.prototype.handleClick = function handleClick() {
    this.setState({
      value: this.state.value + 1
    });
  };

  Counter.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        this.state.value
      ),
      React.createElement(
        'button',
        { onClick: this.handleClick },
        'Press'
      )
    );
  };

  return Counter;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(Counter, null);
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('state'));