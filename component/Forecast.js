import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
    <View>
    <Text style={style.main}>{props.main}</Text>
    <Text style={style.main}>{props.description}</Text>
    <Text style={style.main}>{props.temp}°C</Text>
    </View>
    )
    }

   const style = StyleSheet.create({
    backdrop: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center'

    },
    main:{
        textAlign : 'center',
      textAlignVertical: 'center',
      color: "purple",
      fontSize: 15,
      fontWeight: "bold"
    }

   });