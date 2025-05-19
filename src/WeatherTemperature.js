import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");// default unit is celsius
    // the unit is set to celsius by default


    function convertToCelsius(event) {// the convertToCelsius function is called when the link C is clicked
        event.preventDefault();
        setUnit("celsius");
    }
    
   
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