import React, { useEffect, useState } from 'react';
import './App.css';
import Gif from './components/Gif/index';
import getGifs from './services/getGifs';

function App() {
  const [currentGifs, setCurrentGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: 'morty' }).then((gifs) => setCurrentGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
          currentGifs.map((singleGif) => (
            <Gif
              key={singleGif.id}
              title={singleGif.title}
              url={singleGif.url}
              id={singleGif.id}
            />
          ))
        }
      </section>
    </div>
  );
}

export default App;
