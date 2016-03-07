require('index.scss');

import React from 'react';


export default React.createClass({
  displayName: 'Index',

  render() {
    return (
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
        <p>
          &ndash;csj
        </p>
      </div>
    );
  },
});