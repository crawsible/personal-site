import React from 'react';
import Header from 'components/Header.jsx';

export default React.createClass({
  displayName: 'Index',

  render() {
    return (
      <div>
        <Header selected='about' />
        <main>
          <ul className="social-media group">
            <li>
              <a href="http://github.com/crawsible">
                <img src="assets/images/github.png" alt="github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/colinsjackson">
                <img src="assets/images/linkedin.png" alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="http://twitter.com/crawsible">
                <img src="assets/images/twitter.png" alt="twitter" />
              </a>
            </li>
          </ul>
          <div className="biography">
            <img className="my-photo" src='/assets/images/me.jpg' />
              <p>
                Hi there!
              </p>
              <p>
              I'm Colin Jackson, and I write software. I'm currently working on the Cloud Foundry project at Pivotal. I'm also writing a standard library-only IRC chatbot in Golang for much fun and learning.
              </p>
              <p>
                The quickest way to reach me is via Twitter, but I'll also happily respond to emails (cr<code>@</code>wsible<code>&bull;</code>tech) or LinkedIn messages.
              </p>
              <p>
                Thanks for stopping by!
              </p>
          </div>
        </main>
        <footer>
          <small className="production-message">a COLIN "S" JACKSON production</small>
          <small>
            &copy; me. Absolutely zero rights reserved.
          </small>
        </footer>
      </div>
    );
  },
});
