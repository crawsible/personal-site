require('./stylesheets/index.scss');

window.React = require('react');
window.ReactDOM = require('react-dom');
window.Portfolio = {};

Portfolio.Index = require('./javascripts/Index.jsx');

(function (global) {
  var {React, ReactDOM, Portfolio} = global;
  ReactDOM.render(
    React.createElement(Portfolio.Index),
    document.getElementById('root')
  );
})(window);
