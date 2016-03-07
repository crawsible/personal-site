require('cv.scss');

import React from 'react';


const ExperienceItem = React.createClass({
  render() {
    const { title, org, location, dateStart, dateEnd } = this.props;

    return (
      <li>
        <h3>{title} &mdash; <span className='org'>{org}</span></h3>
        <h4><span>{location}</span> <span>{dateStart}&ndash;{dateEnd}</span></h4>
        <ul>
          {this.props.children}
        </ul>
      </li>
    );
  },
});

const EducationItem = React.createClass({
  render() {
    const { org, location, degree, year } = this.props;

    return (
      <li>
        <h3>{org} &mdash; <span className='location'>{location}</span></h3>
        <h4>{degree}, {year}</h4>
      </li>
    );
  },
});

const Technology = React.createClass({
  render() {
    const { category } = this.props;

    return (
      <li>
        <h3>{category}</h3>
        <ul>
          {this.props.children}
        </ul>
      </li>
    );
  },
});

export default React.createClass({
  displayName: 'CV',

  _location() {
    return this.props.location.pathname.replace(/^\//, '');
  },

  render() {
    return (
      <div className='cv'>
        <h1>Colin Jackson</h1>
        <div className='experience group'>
          <h2>Experience</h2>
          <ul className='group'>
            <ExperienceItem title='Software Engineer' org='Pivotal' location='New York, NY' dateStart='02/2015' dateEnd='present'>
              <li>One of four engineers responsible for <a href='//network.pivotal.io'>network.pivotal.io</a>, an (Angular && React)/Rails B2B product marketplace. We are migrating the front-end framework from Angular to React.</li>
              <li>Wrote fully automated build pipelines for two separate highly complex cloud software projects, which execute unit, integration, and smoke tests before delivering built binaries to services like Vagrant and AWS.</li>
            </ExperienceItem>
            <ExperienceItem title='Communications Director' org='Mel Wymore for City Council' location='New York, NY' dateStart='12/2012' dateEnd='06/2013'>
              <li>Coordinated website, social media, email, editorial and interest group communications.</li>
              <li>Drafted interest group survey responses for organizations such as Citizens Union, New York Amsterdam News, and Stonewall Democratic Club.</li>
              <li>Constructed weekly mass emails to 30,000 registered voters with an open rate of 10.21%.</li>
            </ExperienceItem>
            <ExperienceItem title='Field Organizer' org='Obama for America' location='Brooklyn, NY' dateStart='07/2012' dateEnd='11/2012'>
              <li>Managed all volunteer efforts in 1/3 of Brooklyn for the OFA Border State program.</li>
              <li>Trained and maximized output from volunteer leaders, resulting in an increase in the areas calling capacity from 3,000 calls/week to 10,000 calls/week within seven weeks.</li>
              <li>Recruited and organized 2370 volunteer-hours over the final four days of the election, including 639 volunteer-hours on election day.</li>
            </ExperienceItem>
            <ExperienceItem title='Clerk' org='Integral Derivatives' location='New York, NY' dateStart='06/2009' dateEnd='09/2010'>
              <li>Managed the life cycle of 25-50 complex options derivatives trades daily on the floor of the New York Stock Exchange, ranging in value from $10,000 to $5,000,000 each.</li>
              <li>Increased trading desk's use of cheaper automatic trading system as a percentage of volume traded by 10% in 2 months.</li>
            </ExperienceItem>
          </ul>
        </div>
        <div className='education group'>
          <h2>Education</h2>
          <ul className='group'>
            <EducationItem org='University of Oxford' location='Oxford, UK' degree='BA Philosophy, Politics and Economics' year='2014' />
          </ul>
        </div>
        <div className='technologies group'>
          <h2>Technologies</h2>
          <ul className='group'>
            <Technology category='Languages'>
              <li>Go</li>
              <li>Ruby</li>
              <li>Javascript</li>
              <li>Bash (Unix)</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </Technology>
            <Technology category='Web Frameworks'>
              <li>React</li>
              <li>Backbone</li>
              <li>Rails</li>
            </Technology>
            <Technology category='Testing Frameworks'>
              <li>Jasmine</li>
              <li>Rspec</li>
              <li>Ginkgo</li>
            </Technology>
            <Technology category='Dev/Ops'>
              <li>Packer</li>
              <li>Vagrant</li>
              <li>VirtualBox</li>
              <li>AWS (S3, EC2, CloudFormation)</li>
              <li>Cloud Foundry</li>
              <li>Docker</li>
              <li>OSX</li>
              <li>Linux (Debian, Arch)</li>
            </Technology>
            <Technology category='Practices'>
              <li>Pair Programming</li>
              <li>TDD/BDD</li>
              <li>Agile</li>
            </Technology>
          </ul>
        </div>
      </div>
    );
  },
});
