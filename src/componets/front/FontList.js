import React, { Component } from 'react';
import { useFreeFonts } from '../../contexts/freeFonts';
import FontListLi from './FontListLi';
import './FontList.css';

class FrontList extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#fff';
  }

  render() {
    const { infomation, textinfo, onLink } = this.props;

    const list = infomation.map((info, index) => {
      let ranNum = Math.floor(Math.random() * textinfo.length);
      return (
        <FontListLi
          key={index}
          id={info.id}
          name={info.name}
          nameEng={info.nameEng}
          description={info.description}
          css={info.css}
          html={info.html}
          style={info.style}
          weight={info.weight}
          download={info.download}
          license={info.license}
          textinfo={textinfo[ranNum].text}
          onLink={onLink}
          loading={this.props.loading}
        />
      );
    });

    return (
      <div className="FontList">
        <ol className="list">{list}</ol>
      </div>
    );
  }
}

export default useFreeFonts(FrontList);
