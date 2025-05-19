import React from "react";

export default function WeatherTemperature(props) {
    
  
    
   
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">
                    °C 
                </span>
            </div>
        );
    } 
// the WeatherTemperature component is used to display the temperature in celsius
// the temperature is passed to the WeatherTemperature component from the WeatherDetails component