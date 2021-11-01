import React from 'react';
import './App.css';
import { Route, Link } from 'wouter';
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/pandas">Gifs de pandas</Link>
        <Link to="/gif/mapaches">Gifs de mapaches</Link>
        <Link to="/gif/patos">Gifs de patos</Link>
        <Link to="/gif/panellets">Gifs de panellets</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
