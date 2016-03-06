require('components/header.scss');

import React from 'react';
import {map} from 'lodash';


module.exports = React.createClass({
  displayName: 'Header',
  pages: {
    about: '/index.html',
    projects: 'projects.html',
  },

  renderTab(link, name) {
    var isSelected = this.props.selected === name ? 'selected' : '';
    return (
      <li
        key={name}
        className={[this.props.className, isSelected].join(' ')}
      >
        <a href={link}>{name}</a>
      </li>
    );
  },

  render() {
    return (
      <header>
        <ul className="navigation group">
          {map(this.pages, this.renderTab)}
        </ul>
      </header>
    );
  },
});
