import React, {useState, useEffect} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import DayForecast from "./DayForecast";

export default function WeatherForecast(props) {
    let[loaded, setLoaded] = useState(false);
    // the loaded state is set to false by default
    // this is to prevent the app from rendering before the data is fetched as well as looping
    // through the data and causing an infinite loop whenever the is a change of state
    // the loaded state is set to true when the data is fetched

    let[forecast, setForecast] = useState(null);
    // the forecast state is set to null by default

    function handleResponse(response) {
        //console.log(response.data.daily);
        
        // the temperature is set to the maximum temperature in the response data(fetched from the API)
        
        setForecast(response.data.daily);
        // the forecast state is set to the daily data in the response data(fetched from the API)
        setLoaded(true);
        // the loaded state is set to true when the data is fetched
    }
    useEffect(() => {
        // the useEffect hook is used to fetch the data from the API    
        setLoaded(false);
        // the loaded state is set to false when the data is fetched
    }, [props.coordinates]);
    // the useEffect hook is used to fetch the data from the API when the coordinates prop changes

   
    if (loaded) {
            console.log(forecast);
            // the forecast state is set to the daily data in the response data(fetched from the API)
             return(
                <div className="WeatherForecast">
                    <div className="row">
                        {forecast.map(function (dailyForecast, index) {
                            if (index < 6) {
                                return (
                                    <div className="col" key={index}>
                                        <DayForecast data={dailyForecast} />
                                        
                                    </div>
                                );
                            
                            } 
                        }
                        )}
                 </div>
                
            </div>      
            // the forecast state is set to the daily data in the response data(fetched from the API)   
            // // the DayForecast component is used to display the forecast data    
            // the DayForecast component is used to display the forecast data   
         )

    }
    else{
             let apiKey ="f0edft08a334d1a9c4eb5o0155c624af";
    
            let longitude = props.coordinates.longitude;
            // the longitude is passed from the Weather.js file
            
            let latitude = props.coordinates.latitude;
            // the latitude is passed from the Weather.js file  
            
            let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`
            // the apiUrl is the url of the API being called
            
            // the apiUrl is logged to the console for debugging purposes
            axios.get(apiUrl).then(handleResponse);
            // the axios.get function is used to make a GET request to the API
                    return null;
        }
    
   
}