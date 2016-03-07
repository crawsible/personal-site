require('projects.scss');

import React from 'react';


const Project = React.createClass({
  displayName: 'Project',

  render() {
    const { name, repoName, imgName } = this.props;
    return (
      <li>
        <h2 className='group'>
          {name}
          <a href={'//github.com/crawsible/'+repoName}>repo</a>
        </h2>
        <div className='project-content'>
          <img src={'/assets/images/'+imgName} alt={name} />
          <p>{this.props.children}</p>
        </div>
      </li>
    );
  }
});

export default React.createClass({
  displayName: 'Projects',

  render() {
    return (
      <div className='projects'>
        <div className='intro'>
          <p>
            Here's a small selection of stuff I've whipped together in my spare time.
          </p>
          <p>
            For a fuller picture of my recent endeavors, check out my <a href='//github.com/crawsible'>Github history</a>.
          </p>
        </div>
        <ul className='projects-list group'>
          <Project name='Dorkle' repoName='Dorkle' imgName='dorkle.jpg'>
            A <a href="http://www.sporcle.com">Sporcle</a>-inspired
            quizzical website. But, you know, for dorks.
          </Project>
          <Project name='Sassteroids' repoName='Sassteroids' imgName='sassteroids.jpg'>
            Asteroids game with roll-your-own 2d physics simulation.
            Super bouncy!
          </Project>
          <Project name='Chatly' repoName='chatly' imgName='chatly.jpg'>
            A Node-powered real-time chat web app, with a real-time
            startup name.
          </Project>
        </ul>
      </div>
    );
  },
});
