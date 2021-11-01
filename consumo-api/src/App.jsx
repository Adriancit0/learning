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
        <img src="https://media4.giphy.com/media/EatwJZRUIv41G/giphy.gif?cid=a3b34af9ck7jbofk626ojbd8uni4p5x1p34i63zqfp1wwzr3&rid=giphy.gif&ct=g" alt="" />
      </section>
    </div>
  );
}

export default App;
