import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    contentContainer:{
        margin:10,
        backgroundColor:'#f8f8f8',
        borderRadius:20,
        padding:10,
        elevation:3
    },
    row:{
        justifyContent:'space-between',
        borderEndWidth:0.5,
        borderTopWidth:0.5
    },
    title:{
        fontWeight:'bold',
        margin:5,
        width:'28%'
    },
    value:{
        textAlignVertical:'center',
        marginLeft:5
    },
    column:{
        flexDirection:'row',
        borderWidth:0.5
    },
    infoForm:{
        borderWidth:1
    }
        
})

export default styles;
