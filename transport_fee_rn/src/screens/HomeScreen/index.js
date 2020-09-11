import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';
import {Input, Button, Header} from '../../components';

export default function HomeScreen ({navigation}) {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState(null);
    const [long, setLong] = useState(null);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [sendPlace, setSendPlace] = useState('Miền Bắc');
    const [receivePlace, setReceivePlace] = useState('Trung Quốc');
    const [isSelected, setIsSelected] = useState(false);

    const onSearch = () => {
        
        if(name===null||weight===null||long===null||width===null||height===null||sendPlace===null||receivePlace===null){
            alert('fill all')
        }else{
            navigation.navigate(
                'ResultSearch',
                {
                    name:name, 
                    weight:weight, 
                    long:long, 
                    width:width, 
                    height:height,
                    sendPlace: sendPlace,
                    receivePlace:receivePlace,
                    diffTrans: isSelected
                }
            );}
    }

    return (
        <View style = {styles.container}>
            <Header title ='Search' backgroundColor = '#ffc0cb' color = '#fff'
                iconLeft = {<Icon name='menu' size = {22} color ='#fff'/>}
                onPressLeft = {()=>navigation.toggleDrawer()}
            />
            <ScrollView style = {styles.contentContainer}>
            <View style = {styles.inputContainer}>
                <Input 
                    title = 'Tên'
                    value = {name}
                    onChangeText = {(text)=>setName(text)}
                />
                <Input 
                    title = 'Số cân (kg)'
                    value = {parseFloat(weight)}
                    onChangeText = {(text)=>setWeight(parseFloat(text))}
                    keyboardType = 'numeric'
                />
                <View style = {styles.size}>
                    <Input 
                        title = 'Chiều dài(cm)'
                        value = {parseFloat(long)}
                        onChangeText = {(text)=>setLong(parseFloat(text))}  
                        keyboardType = 'numeric'
                    />
                    
                    <Input 
                        title = 'Chiều rộng(cm)'
                        value = {parseFloat(width)}
                        onChangeText = {(text)=>setWidth(parseFloat(text))} 
                        keyboardType = 'numeric'
                    />
                    <Input 
                        title = 'Chiều cao(cm)'
                        value = {parseFloat(height)}
                        onChangeText = {(text)=>setHeight(parseFloat(text))} 
                        keyboardType = 'numeric'
                    />
                </View>
                <Input 
                    title = 'Nơi gửi'
                    value = {sendPlace}
                    // onChangeText = {(text)=>setSendPlace(text)} 
                />
                <Input 
                    title = 'Nơi nhận'
                    value = {receivePlace}
                    // onChangeText = {(text)=>setReceivePlace(text)} 
                />
                <View style = {styles.row}>
                    <CheckBox
                        value = {isSelected}
                        onValueChange = {setIsSelected}
                        style = {styles.value}
                    />
                    <Text style = {styles.value}>Hàng khó thông quan:(*)</Text>
                </View>
                <Text style = {styles.note}>(*) Hàng khó thông quan bao gồm: thực phầm, chất bột, chất lỏng, pin, điện thoại, máy tính, linh kiện, tóc, yến</Text>
            </View>
            <View style = {styles.buttonContainer} >
                <Button title = 'Search' onPress= {onSearch} backgroundColor = 'blue' color = '#fff'/>
            </View>
        </ScrollView>
        </View>
    )
}