React = require('react');
ReactDOM = require('react-dom');

Portfolio = {Components: {}};
Portfolio.Components.Page = require('./components/Page.jsx');

(function (global) {
  var {React, ReactDOM, Portfolio} = global;

  ReactDOM.render(<Portfolio.Components.Page />, document.getElementById('root'));
})(window);
