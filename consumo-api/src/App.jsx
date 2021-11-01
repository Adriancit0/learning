import React, { useEffect, useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import getGifs from './services/getGifs/index';

function App() {
  const [currentGifs, setCurrentGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: 'programming' }).then((gifs) => setCurrentGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs gifs={currentGifs} />
      </section>
    </div>
  );
}

export default App;
