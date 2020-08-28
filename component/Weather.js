import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    }) 

    return (
        <ImageBackground source={require('../bg.jpg')} style={style.backdrop}> 
           <Text>Zip code</Text>
           <Text>{props.zipcode}</Text>
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