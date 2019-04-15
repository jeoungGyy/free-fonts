import React, { Component } from 'react';
import PageView from './PageView';
import PageGuide from './PageGuide';
import './PageMain.scss';

class PageMain extends Component {
  render() {
    return (
      <div className="PageMain">
        <PageView />
        <PageGuide />
      </div>
    );
  }
}

export default PageMain;
