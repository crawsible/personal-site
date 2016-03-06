require('./stylesheets/index.scss');

window._ = require('lodash');
window.React = require('react');
window.ReactDOM = require('react-dom');
window.Portfolio = {Components: {}};

Portfolio.Projects = require('Projects.jsx');

(function (global) {
  var {React, ReactDOM, Portfolio} = global;
  ReactDOM.render(
    React.createElement(Portfolio.Projects),
    document.getElementById('root')
  );
})(window);
