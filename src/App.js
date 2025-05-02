
import './App.css';
import React from 'react';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather APP</h1>
      </header>
      <Weather />
      
       
         <p>
          This is a simple weather app that allows you to search for the current weather in any city. 
          It uses the OpenWeatherMap API to fetch the weather data and displays it in a user-friendly format.
        </p>
     

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
