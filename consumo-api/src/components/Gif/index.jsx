import React from 'react';
import './gifStyle.css';

// eslint-disable-next-line react/prop-types
export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`} className="Gif">
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={title} />
    </a>
  );
}
