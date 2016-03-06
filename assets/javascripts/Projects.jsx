import React from 'react';
import Header from 'components/Header.jsx';
import Footer from 'components/Footer.jsx';


export default React.createClass({
  displayName: 'Projects',

  render() {
    return (
      <div>
        <Header selected='projects' />
        <main>
          <ul className="projects-list group">
            <li>
              <h2 className="group">
                Dorkle
                <a href="http://www.playdorkle.com">live</a>
                <a href="http://github.com/colinjackson/Dorkle">repo</a>
              </h2>
              <div className="project-content">
                <img src="assets/images/dorkle.jpg" alt="dorkle" />
                <p>
                  A <a href="http://www.sporcle.com">Sporcle</a>-inspired
                  quizzical website. But, you know, for dorks.
                </p>
              </div>
            </li>
            <li>
              <h2 className="group">
                Sassteroids
                <a href="http://sassteroids.colinjackson.co">live</a>
                <a href="http://github.com/colinjackson/Sassteroids">repo</a>
              </h2>
              <div className="project-content">
                <img src="assets/images/sassteroids.jpg" alt="sassteroids" />
                <p>
                  Asteroids game with roll-your-own 2d physics simulation.
                  Super bouncy!
                </p>
              </div>
            </li>
            <li>
              <h2 className="group">
                Chatly
                <a href="http://chatly.colinjackson.co">live</a>
                <a href="http://github.com/colinjackson/chatly">repo</a>
              </h2>
              <div className="project-content">
                <img src="assets/images/chatly.jpg" alt="chatly" />
                <p>
                  A Node-powered real-time chat web app, with a real-time
                  startup name.
                </p>
              </div>
            </li>
          </ul>
        </main>
        <Footer />
      </div>
    );
  },
});
