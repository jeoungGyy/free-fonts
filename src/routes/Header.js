import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_face, ic_report_problem } from 'react-icons-kit/md';

import './Header.scss';

class Header extends Component {
  state = {
    toogle: true
  };

  handleOpen = () => {
    this.setState({
      toogle: false
    });
  };
  handleCloss = () => {
    this.setState({
      toogle: true
    });
  };

  render() {
    const { handleOpen, handleCloss } = this;
    const { toogle } = this.state;

    return (
      <header>
        <h1 className="h1">FREE FONTS</h1>
        <div className="etc">
          <button type="button" onClick={handleOpen}>
            <Icon icon={ic_face} title="" /> <span>제작 정보</span>
          </button>
        </div>

        {!toogle && (
          <div className="layer" onClick={handleCloss}>
            <div className="area">
              <div className="bg">
                <h5>
                  공부를 목적으로 제작 된 사이트입니다.
                  <br />
                  출처에 있는 사이트의 콘텐츠와 디자인을 사용하였습니다.
                </h5>
                <p className="email">limjungk@empas.com</p>
                <div className="su">
                  <p>출처 :</p>
                  <ul>
                    <li>
                      <a
                        href="https://fonts.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        - <span>Google Fonts</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hangeul.naver.com/2017/nanum"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        - <span>네이버 한글한글아름답게</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://youngkang.me/hangul-webfont-showcase/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        - <span>한글 웹폰트 글꼴보기집</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://noonnu.cc/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        - <span>눈누 상업용 무료한글폰트 사이트</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Icon icon={ic_report_problem} title="" />
            </div>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
