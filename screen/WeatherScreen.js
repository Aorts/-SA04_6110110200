import React from 'react'
import { View, StatusBar,StyleSheet } from 'react-native'
import Weather from '../component/Weather'

export default function WeatherScreen({route}){
    return (
        <View style={style.main}>
            <Weather zipCode={route.params.zipCode}/>
            <StatusBar style="auto"/>
        </View>
    )
}
const style = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
    main:{
        textAlign : 'center',
      textAlignVertical: 'center',
      color: "purple",
      fontSize: 15,
      fontWeight: "bold"
    }
   });