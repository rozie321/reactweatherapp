import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");// default unit is celsius
    // the unit is set to celsius by default

    function convertToFahrenheit(event) {// the convertToFahrenheit function is called when the link F is clicked
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {// the convertToCelsius function is called when the link C is clicked
        event.preventDefault();
        setUnit("celsius");
    }
    
    if (unit === "celsius") {// if the unit is celsius
        // the temperature is displayed in celsius
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">
                    °C |{" "}
                    <a href="/" onClick={convertToFahrenheit}>
                        °F
                    </a>
                </span>
            </div>
        );
    } else {// if the unit is fahrenheit
        // the temperature is displayed in fahrenheit
        // the temperature is converted to fahrenheit using the formula (celsius * 9) / 5 + 32
        // the temperature is rounded to the nearest whole number using Math.round()
        return(
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round((props.celsius * 9) / 5 + 32)}</span>
                <span className="unit">
                    <a href="/" onClick={convertToCelsius}>
                        °C
                    </a>{" "}
                    | °F
                </span>
            </div>
        );
        }
    }   