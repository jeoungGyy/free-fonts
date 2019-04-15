import React, { Component } from 'react';
import { useFreeFonts } from '../../contexts/freeFonts';
import './FontSearch.scss';

class FronSearch extends Component {
  handleChange = e => {
    this.props.onTextChange(e.target.value);
  };

  render() {
    const { handleChange } = this;

    return (
      <div className="FontSearch">
        <input
          type="text"
          placeholder="자유롭게 글을 넣어주세요."
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default useFreeFonts(FronSearch);
