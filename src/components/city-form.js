import React from 'react';
import axios from "axios";



const CityForm = ({ setWeatherData, city, setCity, weatherData}) => {

    const API_KEY = '2cde2116230caa0d381930bb6657a7d5';
    const getWeatherData = (e) =>{
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then (({data}) => {
                setWeatherData(data);
            })
            .catch(() => {
                setWeatherData({...weatherData, error: true});
            })
    };
        const inputHandler=(e)=>{
         setCity(e.target.value)
        };

    return (
        <div>
            <form action="" onSubmit={getWeatherData}>
                <input type='text' placeholder='Ведите город' onChange={inputHandler}/>
                <button type='submit'> Узнать погоду</button>

            </form>
        </div>
    );
};

export default CityForm;