import React, { Component } from 'react';
import { FrontMain } from '../componets/front';
import Header from './Header';

class Front extends Component {
  render() {
    return (
      <>
        <Header />
        <FrontMain history={this.props.history} />
      </>
    );
  }
}

export default Front;
