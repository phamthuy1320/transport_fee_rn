import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const ButtonDrawer = (props) =>{
    return (
        <TouchableOpacity style = {styles.button} onPress = {props.onPress}>
            {props?.icon}
            <Text style = {styles.buttonTitle}>{props?.title }</Text>
        </TouchableOpacity>
    )
}

export default function DrawerContent({navigation}){
    return (
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Transport Fee App</Text>
            </View>
            <ButtonDrawer title = ' Home' 
                icon = {<Feather name ='home' size = {18}/>}
                onPress = {()=>{navigation.navigate('HomeTab')}}
            />
            <ButtonDrawer title = ' Currency convert' 
                icon = {<FontAwesome name ='money' size = {18}/>}
                onPress = {()=>{navigation.navigate('CurrencyConvert')}}
            />
            <ButtonDrawer title = ' Contact us' 
                icon = {<AntDesign name ='contacts' size = {18}/>}
                onPress = {()=>{navigation.navigate('OrderScreen')}}
            />
        </View>
    )
}