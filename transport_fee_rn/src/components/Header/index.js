import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const initialProps = {
    title:'Title'
}

export default function Header(props){
    return (
        <View style = {[styles.container, props.backgroundColor?{backgroundColor:props.backgroundColor}:null]}>
            <TouchableOpacity style={styles.left} onPress= {props?.onPressLeft}>
                {props?.iconLeft}
            </TouchableOpacity>
            <Text style = {[styles.title,props.color?{color:props.color}:null]} >{props.title?props.title:initialProps.title}</Text>
            <TouchableOpacity style={styles.right} onPress = {props?.onPressRight}>
                {props?.iconRight}
            </TouchableOpacity>
        </View>
    )
}