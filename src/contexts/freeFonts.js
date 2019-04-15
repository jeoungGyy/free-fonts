import React, { Component, createContext } from 'react';
import data from '../lib/data.json';

const Context = createContext();
const { Provider, Consumer: FreeFontsConsumer } = Context;

class FreeFontsProvider extends Component {
  state = {
    loading: false,
    infomation: [],
    textinfo: [],
    colorinfo: [],
    selectFont: '',
    selectFontH: '',
    selectText: '',
    selectColor: '',
    selectBgColor: '',
    selectCss: '',
    selectHtml: '',
    selectStyle: '',
    selectDownload: '',
    selectLicense: '',
    selectWeight: []
  };

  defaultState = () => {
    let dataList = data.fonts.map(info => info);
    let dataText = data.text.map(info => info);
    let dataColor = data.color.map(info => info);
    this.setState({
      infomation: dataList,
      textinfo: dataText,
      colorinfo: dataColor
    });
  };

  ///////////////////////////////////////////////////////////////////////////////

  componentDidMount() {
    this.defaultState();
  }

  ///////////////////////////////////////////////////////////////////////////////

  actions = {
    handleLink: (
      e,
      textinfo,
      name,
      nameEng,
      css,
      html,
      style,
      weight,
      download,
      license
    ) => {
      // if (!this.state.loading) {
      //   e.preventDefault();
      //   setTimeout(function() {
      //     alert('Hello');
      //   }, 3000);
      // } else {
      //   console.log('222');
      // }

      const { colorinfo } = this.state;

      let ranNum = Math.floor(Math.random() * colorinfo.length);

      this.setState({
        selectFont: nameEng,
        selectFontH: name,
        selectText: textinfo,
        selectColor: colorinfo[ranNum].color,
        selectBgColor: colorinfo[ranNum].bgcolor,
        selectCss: css,
        selectHtml: html,
        selectStyle: style,
        selectWeight: weight,
        selectDownload: download,
        selectLicense: license
      });
    },
    handleTextChange: text => {
      if (!text) {
        this.defaultState();
      } else {
        this.setState({
          textinfo: [
            {
              id: 100,
              text: text
            }
          ]
        });
      }
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function useFreeFonts(WrappedComponent) {
  return function useTimeline(props) {
    return (
      <FreeFontsConsumer>
        {({ state, actions }) => (
          <WrappedComponent
            loading={state.loading}
            infomation={state.infomation}
            textinfo={state.textinfo}
            colorinfo={state.colorinfo}
            selectFont={state.selectFont}
            selectFontH={state.selectFontH}
            selectText={state.selectText}
            selectColor={state.selectColor}
            selectBgColor={state.selectBgColor}
            selectCss={state.selectCss}
            selectHtml={state.selectHtml}
            selectStyle={state.selectStyle}
            selectWeight={state.selectWeight}
            selectDownload={state.selectDownload}
            selectLicense={state.selectLicense}
            onLink={actions.handleLink}
            onTextChange={actions.handleTextChange}
          />
        )}
      </FreeFontsConsumer>
    );
  };
}

export { FreeFontsProvider, FreeFontsConsumer, useFreeFonts };
