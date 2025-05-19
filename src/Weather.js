
import  './Weather.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import React, { useState } from "react";


export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const[weatherData,setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);
    // the city is set to the default city passed from the App.js file
    
    
    function handleResponse(response) {
        console.log(response.data);
       /* alert(`The temperature in ${response.data.city} is ${Math.round(response.data.temperature.current)}°C`); */
       
       // set the temperature to the current temperature in the response data(fetched from the API)

       setWeatherData({
        coordinates: response.data.coordinates,
        temperature: response.data.temperature.current, 
        description: response.data.condition.description,   
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
       // below is the icon url being fetched from icon description at the end of the url
       // Hence the baltics so as to replace the icon whenever the API call matches the particular icon description
       iconurl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
        icon: response.data.condition.icon,
        date: new Date(response.data.time * 1000),
        city: response.data.city,
    
        });
        
        
        //below boolean state initialized to false, when the data is fetched it is set to true
        // this is to prevent the app from rendering before the data is fetched as well as looping
        // through the data and causing an infinite loop whenever the is a change of state
        setReady(true);
    }
    //initial state of ready which is set to false
    // this is to prevent the app from rendering before the data is fetched as well as looping
    
    function handleSubmit(event) {// the handleSubmit function is called when the form is submitted
         event.preventDefault();
            
            searchCity();
           
        }  
        function capturecityInput(event) {// the capturecityInput function is called when the input field is changed
            // the event.preventDefault() function is used to prevent the default action of the form
            event.preventDefault();
            setCity(event.target.value);// the setCity function is used to set the city state to the value of the input field
            // the value of the input field is passed to the setCity function
            
            
        }
        function searchCity() {// the searchCity function is called when the form is submitted
        
             let apiKey="f0edft08a334d1a9c4eb5o0155c624af";
       
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
       
        //api call to fetch the data from the API
        // the data is fetched from the API and passed to the handleResponse function
        // the data is then set to the state using the handleResponse function
        axios.get(apiUrl).then(handleResponse);
        }
    if(ready)
        
    return(
        <div className ="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row"> 

                <div className="col-9">

                    <input type="text" placeholder="Enter a city"
                    className="form-control" id="city-input"onChange={capturecityInput} />
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-primary">
                        Search
                    </button>
                </div>
                </div>
            </form>
            
            <WeatherDetails data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
    )
     //above WeatherDetails component is the body of the weather app defining all the api calls being displayed
    //the data is being retrieved from the Api call being received by the Weather data object.
    else {
       
      searchCity();// the searchCity function is called when the form is submitted and handles the data fetched from the API

        return('Loading...');
    }
}