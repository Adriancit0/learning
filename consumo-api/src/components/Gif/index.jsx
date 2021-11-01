import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Gif({ title, id, url }) {
  return (
    <div>
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={title} />
    </div>
  );
}
