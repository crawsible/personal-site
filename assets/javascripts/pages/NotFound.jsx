require('notfound.scss');

import React from 'react';


export default React.createClass({
  displayName: 'NotFound',

  _location() {
    return this.props.location.pathname.replace(/^\//, '');
  },

  render() {
    return (
      <div className='not-found'>
        <h1>
          404: Not Found
        </h1>
        <p>
          Sorry, but the page you're looking for ("{this._location()}") doesn't exist!
        </p>
        <p>
          Please try using one of the navigation tabs above.
        </p>
        <img src='/assets/images/lolwut.jpg' />
      </div>
    );
  },
});
