import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Input, Button} from '../../components';
import styles from './styles';

export default function OrderScreen({navigation}){
    return (
        <View style = {styles.container}>
            <Header title = 'Contact' backgroundColor = '#bf3eff' color = '#fff'
                iconLeft = {<Icon name='menu' size = {22} color = '#fff'/>} 
                onPressLeft = {()=>{navigation.toggleDrawer()}}
            />
        <View style = {styles.content}>
            <Text style = {styles.cusInfo}>Custom infomation</Text>
            <Input title='name'/>
            <Input title='phone'/>
            <Input title='zalo link'/>
        </View>
        <Button title = 'Send' backgroundColor='#008080' color = '#fff'
            onPress = {()=>{alert('Thank you, We will contact with you soon.')}}
        />
        
        </View>
    )
}