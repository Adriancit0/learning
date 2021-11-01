import React, { useEffect, useState } from 'react';
import Gif from '../Gif/index';
import getGifs from '../../services/getGifs';

export default function ListOfGifs({ keyword }) {
  const [currentGifs, setCurrentGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword })
      .then((gettedGifs) => setCurrentGifs(gettedGifs));
  }, [keyword]);

  return (
    currentGifs.map(({ id, title, url }) => (
      <Gif
        key={id}
        title={title}
        url={url}
        id={id}
      />
    ))
  );
}
