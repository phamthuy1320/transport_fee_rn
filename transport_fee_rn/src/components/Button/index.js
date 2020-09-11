import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

const initialButton = {
    title:'button'
}

export default function Button (props) {
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {[styles.button,{backgroundColor:props.backgroundColor}]} 
                onPress = {props.onPress}
            >
                <Text style = {[styles.title, props.color?{color:props.color}:null]}>{props.title?props.title:initialButton}</Text>
            </TouchableOpacity>
        </View>
        
    )
}