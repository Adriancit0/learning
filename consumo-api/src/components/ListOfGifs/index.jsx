/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Gif from '../Gif/index';
import getGifs from '../../services/getGifs';

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [currentGifs, setCurrentGifs] = useState(
    { isLoading: false, results: [] }
  );

  useEffect(() => {
    setCurrentGifs(() => ({ isLoading: true, results: currentGifs.results }));
    getGifs({ keyword })
      .then((gettedGifs) => {
        setCurrentGifs({ isLoading: false, results: gettedGifs });
      });
  }, [keyword]);

  if (currentGifs.isLoading) return <i>Cargando...</i>;

  return (
    currentGifs.results.map(({ id, title, url }) => (
      <Gif
        key={id}
        title={title}
        url={url}
        id={id}
      />
    ))
  );
}
