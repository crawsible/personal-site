require('base.scss');

import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { render } from 'react-dom';

import { Header, Footer } from 'components';
import { About, Projects, CV, NotFound } from 'pages';


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
      <Route path='about' component={About} />
      <Route path='projects' component={Projects} />
      <Route path='cv' component={CV} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('root'));
