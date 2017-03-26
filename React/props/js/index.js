'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Test.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Hello ',
        this.props.name
      ),
      React.createElement(
        'h2',
        null,
        this.props.number
      ),
      React.createElement(
        'div',
        null,
        this.props.children
      )
    );
  };

  return Test;
}(React.Component);

Test.propTypes = {
  name: React.PropTypes.string,
  number: React.PropTypes.number.isRequired
};
Test.defaultProps = {
  name: 'none'
};

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(
      Test,
      { number: 3 },
      'Hi!!'
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('props'));