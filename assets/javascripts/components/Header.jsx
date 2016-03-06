require('components/header.scss');

import React from 'react';
import {map} from 'lodash';


module.exports = React.createClass({
  displayName: 'Header',
  _navigationItems: [
    {name: 'about', link: '/index.html'},
    {name: 'projects', link: '/projects.html'},
  ],
  _socialMediaItems: [{
    link: 'http://github.com/crawsible',
    imgName: 'github.png',
    alt: 'Github',
  }, {
    link: 'https://www.linkedin.com/in/colinsjackson',
    imgName: 'linkedin.png',
    alt: 'LinkedIn',
  }, {
    link: 'http://twitter.com/crawsible',
    imgName: 'twitter.png',
    alt: 'Twitter',
  }],

  renderTab({name, link}) {
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

  renderSocialMedia({link, imgName, alt}) {
    return (
      <li key={alt}>
        <a href={link}>
          <img src={'/assets/images/'+imgName} alt={alt} />
        </a>
      </li>
    );
  },

  render() {
    return (
      <header className='component'>
        <ul className='navigation group'>
          {map(this._navigationItems, this.renderTab)}
        </ul>
        <ul className='social-media group'>
          {map(this._socialMediaItems, this.renderSocialMedia)}
        </ul>
      </header>
    );
  },
});
