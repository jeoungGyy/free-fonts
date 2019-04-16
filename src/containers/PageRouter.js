import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Front from '../routes/Front';
import Page from '../routes/Page';

class pageRouter extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Front} />
        <Route path="/page" component={Page} />
      </Router>
    );
  }
}

export default pageRouter;
