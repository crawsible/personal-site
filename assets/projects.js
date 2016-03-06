require('./stylesheets/index.scss');

window.React = require('react');
window.ReactDOM = require('react-dom');
window.Portfolio = {};

Portfolio.Projects = require('./javascripts/Projects.jsx');

(function (global) {
  var {React, ReactDOM, Portfolio} = global;
  ReactDOM.render(
    React.createElement(Portfolio.Projects),
    document.getElementById('root')
  );
})(window);
