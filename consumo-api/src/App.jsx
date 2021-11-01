import React, { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/getGifs';

function App() {
  const [realgifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs().then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
          realgifs.map((singleGif) => <img src={singleGif} alt={singleGif} />)
        }
      </section>
    </div>
  );
}

export default App;
