import React, { Component } from 'react';
import { useFreeFonts } from '../../contexts/freeFonts';
import ContentEditable from 'react-contenteditable';
import { Icon } from 'react-icons-kit';
import {
  ic_format_align_left,
  ic_format_align_center,
  ic_format_align_right,
  ic_title,
  ic_arrow_drop_down,
  ic_settings_ethernet,
  ic_format_color_text,
  ic_format_color_fill,
  ic_loop
} from 'react-icons-kit/md';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { SketchPicker } from 'react-color';
import './PageView.scss';

import data from '../../lib/data.json';

class PageView extends Component {
  state = {
    infomation: [],
    choiceText: [],
    font: '',
    fontH: '',
    text: '',
    color: '',
    bgColor: '',
    weight: [],
    fontWeight: '',
    download: '',
    license: '',
    toggle: true,
    colorToggle: true,
    bgColorToggle: true,
    align: '',
    tValue: 80,
    hValue: 1.2,
    wValue: 1
  };

  defaultState = () => {
    let dataList = data.fonts.map(info => info);

    this.setState({
      infomation: dataList,
      font: this.props.selectFont,
      fontH: this.props.selectFontH,
      text: this.props.selectText,
      color: this.props.selectColor,
      bgColor: this.props.selectBgColor,
      weight: this.props.selectWeight,
      download: this.props.selectDownload,
      license: this.props.selectLicense
    });
  };

  handleSliderChange = (value, identity) => {
    this.setState({
      [identity]: value
    });
  };

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  handleColorToggle = () => {
    this.setState({
      colorToggle: !this.state.colorToggle
    });
  };
  handleBgColorToggle = () => {
    this.setState({
      bgColorToggle: !this.state.bgColorToggle
    });
  };

  handleFontWeight = e => {
    const target = e.target.value;
    this.setState({
      fontWeight: target,
      toggle: !this.state.toggle
    });
  };

  handleAlign = data => {
    this.setState({
      align: data
    });
  };

  handleChange = e => {
    this.setState({text: e.target.value});
  };

  handleChangeColor = (color, identity) => {
    this.setState({
      [identity]: color.hex
    });
  };

  handleRandomColor = () => {
    const { colorinfo } = this.props;
    const ranIndex = Math.floor(Math.random() * colorinfo.length);

    this.setState({
      color: colorinfo[ranIndex].color,
      bgColor: colorinfo[ranIndex].bgcolor
    });
  };

  componentDidMount() {
    this.defaultState();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!nextProps) {
    } else {
      const ranNum = Math.floor(Math.random() * nextProps.textinfo.length);
      const ranColor = Math.floor(Math.random() * nextProps.colorinfo.length);
      const urlPram = Number(window.location.href.substring(1).split('=')[1]);
      const weightList = nextProps.infomation[urlPram - 1].weight;

      // console.log(weightIndex);

      this.setState({
        font: nextProps.infomation[urlPram - 1].nameEng,
        fontH: nextProps.infomation[urlPram - 1].name,
        text: nextProps.textinfo[ranNum].text,
        color: nextProps.colorinfo[ranColor].color,
        bgColor: nextProps.colorinfo[ranColor].bgcolor,
        weight: weightList,
        download: nextProps.infomation[urlPram - 1].download,
        license: nextProps.infomation[urlPram - 1].license
      });
    }
  }

  render() {
    const {
      handleToggle,
      handleColorToggle,
      handleBgColorToggle,
      handleFontWeight,
      handleAlign,
      handleSliderChange,
      handleChangeColor,
      handleRandomColor,
      handleChange
    } = this;
    const {
      font,
      fontH,
      text,
      color,
      bgColor,
      weight,
      fontWeight,
      toggle,
      colorToggle,
      bgColorToggle,
      align,
      tValue,
      hValue,
      wValue,
      download,
      license
    } = this.state;
    document.body.style.backgroundColor = bgColor;

    const weightBody = weight.map((info, index) => {
      return (
        <li key={index}>
          <button type="button" onClick={handleFontWeight} value={info}>
            - {info}
          </button>
        </li>
      );
    });

    // console.log(aaa);

    return (
      <div className="PageView">
        <div className="textarea">
          <ContentEditable
            html={text} // innerHTML of the editable div
            tagName="p" // Use a custom HTML tag (uses a div by default)
            className="edit"
            onChange={handleChange}
            style={{
              color: color,
              fontFamily: font,
              fontSize: `${tValue}px`,
              fontWeight: !fontWeight
                ? `${weight[0]}`.replace(/[a-z]+|\s+|[-]/gi, '')
                : `${fontWeight}`.replace(/[a-z]+|\s+|[-]/gi, ''),
              textAlign: align,
              lineHeight: hValue,
              letterSpacing: `${wValue}px`
            }}
          />
        </div>

        <div className="fontG">
          {tValue}px / {hValue}px / {wValue}
        </div>

        <div className="controls">
          <div className="div fchoice">
            <button type="button" className="fontS" onClick={handleToggle}>
              {fontH} {!fontWeight ? weight[0] : fontWeight}{' '}
              <Icon icon={ic_arrow_drop_down} title="" />
            </button>
            {!toggle && <ul className="poa">{weightBody}</ul>}
          </div>

          <span className="blet s1">|</span>

          <div className="div space">
            <button
              type="button"
              value="left"
              onClick={() => handleAlign('left')}
            >
              <Icon icon={ic_format_align_left} title="왼쪽 정렬" />
            </button>
            <button type="button" onClick={() => handleAlign('center')}>
              <Icon icon={ic_format_align_center} title="가운데 정렬" />
            </button>
            <button type="button" onClick={() => handleAlign('right')}>
              <Icon icon={ic_format_align_right} title="오른쪽 정렬" />
            </button>
          </div>

          <span className="blet s2">|</span>

          <div className="div height">
            <span className="fs">
              <Icon icon={ic_title} title="크기" />
            </span>
            <Slider
              id="a"
              onChange={value => handleSliderChange(value, 'tValue')}
              value={this.state.tValue}
              min={10}
              max={100}
              tipFormatter={value => this.state.value}
            />
            <span className="fs">
              <Icon icon={ic_settings_ethernet} title="행간" className="etc" />
            </span>
            <Slider
              name="b"
              onChange={value => handleSliderChange(value, 'hValue')}
              value={this.state.hValue}
              min={-1}
              max={3}
              step={0.1}
              tipFormatter={value => this.state.value}
            />
            <span className="fs">
              <Icon icon={ic_settings_ethernet} title="자간" />
            </span>
            <Slider
              name="c"
              onChange={value => handleSliderChange(value, 'wValue')}
              value={this.state.wValue}
              min={-15}
              max={20}
              step={0.1}
              tipFormatter={value => this.state.value}
            />
          </div>
        </div>

        <div className="btns">
          <div className="f">
            <button type="button" onClick={handleColorToggle}>
              <Icon icon={ic_format_color_text} title="글자색" />
            </button>
            {!colorToggle && (
              <div className="poa">
                <SketchPicker
                  color={color}
                  onChangeComplete={e => handleChangeColor(e, 'color')}
                />
              </div>
            )}
          </div>
          <div className="c">
            <button type="button" onClick={handleBgColorToggle}>
              <Icon icon={ic_format_color_fill} title="배경색" />
            </button>
            {!bgColorToggle && (
              <div className="poa">
                <SketchPicker
                  color={bgColor}
                  onChangeComplete={e => handleChangeColor(e, 'bgColor')}
                />
              </div>
            )}
          </div>
          <div className="l">
            <button type="button" onClick={handleRandomColor}>
              <Icon icon={ic_loop} title="랜덤" />
            </button>
          </div>
          <a href={download} target="_blank" rel="noopener noreferrer">
            <span>다운로드 링크</span>
          </a>
          <a href={license} target="_blank" rel="noopener noreferrer">
            <span>라이선스 정보</span>
          </a>
        </div>
      </div>
    );
  }
}

export default useFreeFonts(PageView);
