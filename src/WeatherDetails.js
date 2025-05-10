import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherDetails(props) {
    return (
        //below component is the body of the weather app defining all the api calls being displayed.
        //the Api call is on the main component Weather.js 
        //props.data is the data being passed from the Weather.js component
        //the data is being passed to the WeatherDetails component from the Weather data object 
        <div className="WeatherDetails">
           <h1>{props.data.city}</h1>
            <ul>
                <li>
                    
                    <FormattedDate date={props.data.date} />
                </li>
                <li>{props.data.icon}</li>
                
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src={props.data.iconurl}
                        alt={props.data.description}
                        className="float-left"
                        />
                        <div className="float-left">
                            <span className="temperature">
                                {Math.round(props.data.temperature)}
                                </span>  
                            <span className="unit">°C|°F</span>  
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <ul>
                            
                            <li>Humidity:{props.data.humidity} % </li>
                            <li>Wind:{Math.round(props.data.wind)} km/h</li>
                        </ul>
                </div>
            </div>

        </div>
    );
}