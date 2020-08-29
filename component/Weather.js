import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    }) 

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=7fa6f3c7fd9ae8ab3881a795ecbbe17c`)
        .then((response) => response.json())
        .then((json) => {
            setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp});
             })
        .catch((error) => {
             console.warn(error);
         });
        }
     }, [props.zipCode])

    

    return (
        <ImageBackground source={require('../bgg.jpg')} style={style.backdrop}> 
           <Text>Zipcode</Text>
           <Text>{props.zipCode}</Text>
           <Forecast {...forecastInfo}/> 
        </ImageBackground>
    
    )
   }
   const style = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
   });