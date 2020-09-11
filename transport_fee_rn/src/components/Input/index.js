import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

export default function HomeInput(props){
    return (
        <View style = {props.styles?props.styles:styles.container}>
            <Text style = {styles.title}>{props?.title}</Text>
            <TextInput 
                style = {styles.input}
                value = {props.value}
                onChangeText = {props.onChangeText}
                keyboardType = {props.keyboardType?props.keyboardType:'default'}

            />
            {/* <Text>{props?.alert}</Text> */}
        </View>
    )
}
