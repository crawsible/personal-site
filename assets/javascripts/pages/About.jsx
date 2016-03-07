require('about.scss');

import React from 'react';


export default React.createClass({
  displayName: 'About',

  render() {
    return (
      <div className='biography'>
        <img className='my-photo' src='/assets/images/me.jpg' />
        <p className='enthusiastic-greeting'>
          Hey there!
        </p>
        <p>
          I'm Colin Jackson, and I write software.
        </p>
        <p>
          I'm currently working on the <a href='//cloudfoundry.org'>Cloud Foundry</a> project at <a href='//pivotal.io'>Pivotal</a>. I'm also writing an <a href='//github.com/crawsible/crawsibot'>IRC chatbot</a> in Golang for fun and skillz.
        </p>
        <p>
          The quickest way to reach me is via <a href='//twitter.com/crawsible'>Twitter</a>, but I'll also happily respond to emails (cr<code>@</code>wsible<code>&bull;</code>tech) or <a href='//linkedin.com/in/colinsjackson'>LinkedIn</a> messages.
        </p>
        <p>
          Thanks for stopping by!
        </p>
        <p className='sign-off'>
          csj
        </p>
      </div>
    );
  },
});
