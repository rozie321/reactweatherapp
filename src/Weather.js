import React from "react";
import  './Weather.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from "axios";
import { useState } from "react";



export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const[weatherData,setWeatherData] = useState({});
    
    
    function handleResponse(response) {
        console.log(response.data);
       /* alert(`The temperature in ${response.data.city} is ${Math.round(response.data.temperature.current)}°C`); */
       
       // set the temperature to the current temperature in the response data(fetched from the API)

       setWeatherData({
        temperature: response.data.temperature.current, 
        description: response.data.condition.description,   
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon,
        precipitation: response.data.condition.precipitation,
        });
        
        
        //below boolean state initialized to false, when the data is fetched it is set to true
        // this is to prevent the app from rendering before the data is fetched as well as looping
        // through the data and causing an infinite loop whenever the is a change of state
        setReady(true);
    }
    //initial state of ready which is set to false
    // this is to prevent the app from rendering before the data is fetched as well as looping
    if(ready)
    return(
        <div className ="Weather">
            <form>
                <div className="row"> 

                <div className="col-9">

                    <input type="text" placeholder="Enter a city"
                    className="form-control" id="city-input" />
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-primary">
                        Search
                    </button>
                </div>
                </div>
            </form>
            <h1>Lisbon</h1>
            <ul>
                <li>Wednesday: 07:00</li>
                <li>{weatherData.icon}</li>
                
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img 
                        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                        alt="Weather Icon" 
                        className="float-left"
                        />
                        <div className="float-left">
                            <span className="temperature">
                                {Math.round(weatherData.temperature)}
                                </span>  
                            <span className="unit">°C|°F</span>  
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <ul>
                            <li>Precipitation:{weatherData.precipitation}</li>
                            <li>Humidity:{weatherData.humidity}</li>
                            <li>Wind:{weatherData.wind}</li>
                        </ul>
                </div>
            </div>
        </div>
    )
    else {
        const apiKey="f0edft08a334d1a9c4eb5o0155c624af";
       
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
       
        //api call to fetch the data from the API
        // the data is fetched from the API and passed to the handleResponse function
        // the data is then set to the state using the setTemperature function
        axios.get(apiUrl).then(handleResponse);

        return('Loading...');
        // <div className="Weather">Loading...</div>
    }
}