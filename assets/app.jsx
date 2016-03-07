require('base.scss');

import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import {render} from 'react-dom'

import Index from 'Index.jsx';
import Projects from 'Projects.jsx';
import Header from 'components/Header.jsx';
import Footer from 'components/Footer.jsx';


const App = React.createClass({
  render() {
    debugger;
    return (
      <div>
        <Header selected='about' />
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
