require('components/header.scss');

import React from 'react';
import { Link } from 'react-router';


const NavigationItem = React.createClass({
  displayName: 'NavigationItem',

  render() {
    const {name, link, selected} = this.props;
    const isSelected = this.props.selected ? 'selected' : '';

    return (
      <li
        key={name}
        className={[this.props.className, isSelected].join(' ')}
      >
        <Link to={link}>{name.toUpperCase()}</Link>
      </li>
    );
  },
});

const SocialMediaItem = React.createClass({
  displayName: 'SocialMediaItem',

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
          <NavigationItem name='about' link='about' selected={selected === 'about'} />
          <NavigationItem name='projects' link='projects' selected={selected === 'projects'} />
          <NavigationItem name='CV' link='cv' selected={selected === 'cv'} />
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
