import React, { Component } from 'react';
import { useFreeFonts } from '../../contexts/freeFonts';
import './PageGuide.scss';

import data from '../../lib/data.json';

class PageGuide extends Component {
  state = {
    infomation: [],
    cssInfo: '',
    htmlInfo: '',
    styleInfo: ''
  };

  defaultState = () => {
    let dataList = data.fonts.map(info => info);

    this.setState({
      infomation: dataList,
      cssInfo: this.props.selectCss,
      htmlInfo: this.props.selectHtml,
      styleInfo: this.props.selectStyle
    });
  };

  componentDidMount() {
    this.defaultState();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!nextProps) {
    } else {
      const urlPram = Number(window.location.href.substring(1).split('=')[1]);

      // console.log(nextProps);

      this.setState({
        cssInfo: nextProps.infomation[urlPram - 1].css,
        htmlInfo: nextProps.infomation[urlPram - 1].html,
        styleInfo: nextProps.infomation[urlPram - 1].style
      });
    }
  }

  render() {
    const { cssInfo, htmlInfo, styleInfo } = this.state;
    return (
      <div className="PageGuide">
        <h3>CSS에서 사용할 경우.</h3>
        <div className="box">{cssInfo}</div>
        <h3>HTML로 작성할 경우.</h3>
        <div className="box">{htmlInfo}</div>
        <h3>&lt;Style&gt; 태그 안에 font-family 설정.</h3>
        <div className="box">{styleInfo}</div>
      </div>
    );
  }
}

export default useFreeFonts(PageGuide);
