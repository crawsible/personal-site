require('components/footer.scss');

import React from 'react';


export default React.createClass({
  displayName: 'Footer',

  render() {
    return (
      <footer className='component'>
        <small className='production-message'>a COLIN "S" JACKSON production</small>
        <small>
          &copy; me. Absolutely zero rights reserved.
        </small>
      </footer>
    );
  },
});
