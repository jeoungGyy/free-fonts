import React, { Component } from 'react';
import { PageMain } from '../componets/page';
import { withRouter } from 'react-router-dom';

class Page extends Component {
  render() {
    return (
      <>
        <PageMain />
      </>
    );
  }
}

export default withRouter(Page);
