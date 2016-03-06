require('./stylesheets/index.scss');

window._ = require('lodash');
window.React = require('react');
window.ReactDOM = require('react-dom');
window.Portfolio = {Components: {}};

Portfolio.Index = require('Index.jsx');

(function (global) {
  var {React, ReactDOM, Portfolio} = global;
  ReactDOM.render(
    React.createElement(Portfolio.Index),
    document.getElementById('root')
  );
})(window);
