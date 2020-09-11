import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingHorizontal:10,
        height:60,
        backgroundColor:'#fff',
        elevation:4,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    title:{
        alignSelf:'center',
        fontSize:22
    },
    left:{
        alignSelf:'center'
    },
    right:{
        alignSelf:'center'
    }
});

export default styles;

