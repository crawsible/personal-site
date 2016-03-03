module.exports = React.createClass({
  displayName: 'Page',
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-xs-offset-1">
            <h1>Colin Jackson</h1>
          </div>
          <div className="col-md-4">
            <img src='/assets/images/me.jpg' />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
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
        </div>
      </div>
    );
  },
});
