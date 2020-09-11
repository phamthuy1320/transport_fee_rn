import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    content:{
        margin:10,
        justifyContent:'center',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:10,
        height:50,
        backgroundColor:'#f8f8f8',
        elevation:3,
        alignContent:'center',
        alignItems:'center'
    },
    containerInput:{
        marginHorizontal:10,
        marginVertical:20
    },
    input:{
        height:60,
        borderBottomWidth:1,
        fontSize:22
    }
})
export default styles;