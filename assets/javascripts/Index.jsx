module.exports = React.createClass({
  displayName: 'Page',
  render() {
    return (
      <div>
        <header>
          <div className="header-content">
            <div className="context group">
              <small>colin jackson</small>
              <small>software engineer</small>
            </div>
          </div>
          <ul className="navigation group">
            <li className="selected"><a href="./index.html">about</a></li>
            <li><a href="./portfolio.html">portfolio</a></li>
          </ul>
        </header>

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

          <h1>about me</h1>
          <div className="biography">
            <img className="my-photo" src='/assets/images/me.jpg' />
              <p>
                Hi there! I'm Colin Jackson, and I write software. I'm currently working on the Cloud Foundry project at Pivotal. I'm also writing a standard library-only IRC chatbot in Golang for much fun and learning.
              </p>
              <p>
                The quickest way to reach me is via Twitter, but I'll also happily respond to emails (cr [at] wsible [dot] tech) or LinkedIn messages.
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