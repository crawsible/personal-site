require('components/header.scss');

import React from 'react';
import {map} from 'lodash';


const NavigationItem = React.createClass({
  render() {
    const {name, link, selected} = this.props;
    const isSelected = this.props.selected ? 'selected' : '';

    return (
      <li
        key={name}
        className={[this.props.className, isSelected].join(' ')}
      >
        <a href={link}>{name}</a>
      </li>
    );
  },
});

const SocialMediaItem = React.createClass({
  render() {
    const {link, imgName, alt} = this.props;

    return (
      <li key={alt}>
        <a href={link}>
          <img src={'/assets/images/'+imgName} alt={alt} />
        </a>
      </li>
    );
  },
});

export default React.createClass({
  displayName: 'Header',

  render() {
    const {selected} = this.props;

    return (
      <header className='component'>
        <ul className='navigation group'>
          <NavigationItem name='about' link='/index.html' selected={selected === 'about'} />
          <NavigationItem name='projects' link='/projects.html' selected={selected === 'projects'} />
        </ul>
        <ul className='social-media group'>
          <SocialMediaItem link='//github.com/crawsible' imgName='github.png' alt='Github' />
          <SocialMediaItem link='//linkedin.com/in/colinsjackson' imgName='linkedin.png' alt='LinkedIn' />
          <SocialMediaItem link='//twitter.com/crawsible' imgName='twitter.png' alt='Twitter' />
        </ul>
      </header>
    );
  },
});
