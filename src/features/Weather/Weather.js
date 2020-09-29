import React, { useEffect, useState } from 'react'


export default function Weather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,Ro&appid=c7da641777760054e5ca6164eb47580a')
        .then(res => res.json())
        .then(data => setWeather(data));
    }, []);

    function kToC(kelvin) {
        return `${parseInt((kelvin - 273.15))}° C`;
    }

    if(!weather) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>The Weather for { weather.name }</h1>
            <img src={ require(`./icons/${weather.weather[0].icon}.png`) } />
            <p>Temperature: { kToC(weather.main.temp) }</p>
            <p>Min: { kToC(weather.main.temp_min) } | Max: { kToC(weather.main.temp_max) }</p>
            <p>Feels like: { kToC(weather.main.feels_like) }</p>
        </div>
    )
}