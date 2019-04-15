import React from 'react';
import { Link } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import './FontListLi.scss';

const FontListLi = ({
  id,
  name,
  nameEng,
  description,
  css,
  html,
  style,
  weight,
  download,
  license,
  textinfo,
  onLink,
  loading
}) => {
  return (
    <li>
      <Link
        onClick={e =>
          onLink(
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
          )
        }
        to={{
          pathname: `/page/${nameEng.replace(/(\s*)/g, '')}`,
          search: `?id=${id}`
          // state: { detail: 'aaaaaaaaa' }
        }}
      >
        <h3>
          <span>{name}</span>
        </h3>
        <div className="flex">
          <p className="left">{description}</p>
          <p className="right">({weight.length} Styles)</p>
        </div>
      </Link>
      <div className="areas">
        <ContentEditable
          html={textinfo} // innerHTML of the editable div
          tagName="p" // Use a custom HTML tag (uses a div by default)
          style={{
            fontFamily: nameEng
          }}
        />
      </div>
    </li>
  );
};

export default FontListLi;
