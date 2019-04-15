import React, { Component } from 'react';
import FontList from './FontList';
import FronSearch from './FontSearch';
import './FrontMain.css';

class FrontMain extends Component {
  render() {
    return (
      <div className="FrontMain">
        <FronSearch />
        <FontList history={this.props.history} />
      </div>
    );
  }
}

export default FrontMain;
