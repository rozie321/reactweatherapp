
import './App.css';
import React from 'react';
import Weather from './Weather';
import  './Weather.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      
        <Weather />
        <footer>
          <p>Created by Rozie Manesh source  <a href="https://github.com/rozie321/reactweatherapp"> github </a>
          and  <a href="https://reactweatherapp-roselyn.netlify.app/" > 
            netlify </a>
          </p>
          </footer>
      </div>
      
  );
}

export default App;
