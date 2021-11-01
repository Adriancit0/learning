import React, { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/getGifs';

function App() {
  const [realgifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: 'rick' }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
          realgifs.map((singleGif) => <img src={singleGif.url} alt={singleGif.url} />)
        }
      </section>
    </div>
  );
}

export default App;
