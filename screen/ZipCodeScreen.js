import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Kalasin', code: '46000' },
    { place: 'Kamalsai', code: '46130' },
    { place: 'Khlong Hoi Khong', code: '90230' },
    { place: 'Phattalung', code: '93000' },
    { place: 'Khao Chai Son', code: '93130' },
    { place: 'Krabi', code: '81000' },
    { place: 'Nakhon Si Thammarat', code: '80000' },
    { place: 'Chawang', code: '80150' },

   ]

const ZipItem = ({place, code, navigation}) => (
    
    <TouchableHighlight onPress={() =>{
        navigation.navigate('Weather', {zipCode: code})
    }}> 
        <View style={styles.zipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
         </View>
        </TouchableHighlight>
        
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <View style={styles.backdrop}>
            <ImageBackground source={require('../bgg.jpg')} style={styles.backdrop}>
        
            <Text style = {styles.title}>Choose place</Text>
            <FlatList
        data ={availableZipItems}
        keyExtractor = {item => item.code}
        renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        </ImageBackground>
        </View>
        )
    }

    
const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    zipPlace: {
        flex: 1,
    },

    zipCode: {
        flex: 1,
    },
    
    backdrop: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center'

    },
    title:{
        textAlign : 'center',
        textAlignVertical: 'center',
        color: "blue",
        fontSize: 30,
        fontWeight: "bold"
    },

    main:{
        color: "red",    },
})