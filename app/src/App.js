import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomJoke from './components/RandomJoke'
import { jokesReducer } from './store/reducers/jokesReducer'
function App() {
  return (
    <div className="App">
      
     <RandomJoke/>
    </div>
  );
}

export default App;
