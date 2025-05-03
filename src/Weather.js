import React from "react";
import  './Weather.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Weather() {
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
                <li>Wednesday: 0700</li>
                <li>Mostly Cloudy</li>
                
            </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Weather Icon" />
                   <span className="temperature">
                    6
                    </span>  
                    <span className="unit">°C|°F</span>   

                </div>
                <div className="col-6">
                    <ul>
                            <li>Precipitation: 15%</li>
                            <li>Humidity: 60%</li>
                            <li>Wind: 10 km/h</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}