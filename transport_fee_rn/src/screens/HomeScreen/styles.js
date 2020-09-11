import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8f8f8',

    },
    contentContainer:{
        flex:1,
        marginVertical:10,
        borderRadius:20,
        backgroundColor:'#fff',
        elevation:3
    },
    inputContainer:{
        flex:6,
    },
    size:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonContainer:{
        margin:10,
        borderRadius:20
    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center'
    },
    value:{
        
    },
    note:{
        color:'#666666',
        textAlign:'center'
    }
})

export default styles;