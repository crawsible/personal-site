require('base.scss');

import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import {render} from 'react-dom';

import { Header, Footer } from 'components';
import { Index, Projects } from 'pages';


const App = React.createClass({
  _location() {
    return this.props.location.pathname.replace(/^\//, '');
  },

  render() {
    return (
      <div>
        <Header selected={this._location()} />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  },
});

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='about' />
      <Route path='about' component={Index} />
      <Route path='projects' component={Projects} />
    </Route>
  </Router>
), document.getElementById('root'));
