import React from 'react';

import './WeatherForecast.css';

export default function DayForecast(props) {
    function maxTemperature() {
        let max = Math.round(props.data.temperature.maximum);
        return `${max}°`;
    }
    function minTemperature() {
        let min = Math.round(props.data.temperature.minimum);
        return `${min}°`;
    }
    function day() {
        let date = new Date(props.data.time * 1000);
        let days=[
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];      
        let day = days[date.getDay()];
        return day;
    }
    return (
       <div className="dayForecast">
                <div className="WeatherForecast-day">{day()}
                
                <img src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`} className="WeatherForecast-img" alt="clear" />
                
                <div className="WeatherForecast-temperatures">
                                <span className="WeatherForecast-temperature-max">{maxTemperature()} </span>
                                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
                </div>             
                </div>        
                            
                            
        </div >          
    );
}