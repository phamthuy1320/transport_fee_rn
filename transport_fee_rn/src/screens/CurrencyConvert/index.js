import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Button} from '../../components';
import styles from './styles';
import {round} from '../../functions/round';

const VND_CNY = 3392.817;
const USD_CNY = 6.846;

const HeaderConvert = (props) => {
    return (
        <View style = {styles.row}>
                <Text style = {{color:props.color0}}>{props.from}</Text>
                <TouchableOpacity onPress = {props.onPress}>
                    <Icon name = 'swap-horizontal' size= {22} color= {props.color1}/>
                </TouchableOpacity>
                <Text style = {{color:props.color2}}>{props.to}</Text>
        </View>
    )
}

const Input = (props) =>{
    return (
        <View style = {styles.containerInput}>
            <Text>{props.title}</Text>
            <TextInput
                style = {[styles.input, {color:props?.color}]}
                value = {props.value}
                onChangeText = {props.onChangeText}
                keyboardType = 'numeric'
            />
        </View>
    )
}


export default function CurrencyConvert ({navigation}){
    // const {_fromBill} = route?.params; 
    // const [from, setFrom] = useState("VND");
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("CNY");
    // const [titleFrom, setTitleFrom] = useState('Vietnam Dong (VND)');
    const [titleFrom, setTitleFrom] = useState('United State (USD)');
    const [titleTo , setTitleTo] = useState("China Yuan (CNY)");
    const [convertRatio, setConvertRatio] = useState(0)
    const [currencyFrom, setCurrencyFrom] = useState(0);
    const [currencyTo, setCurrencyTo] = useState(0);
    // const [selectedValue, setSelectedValue] = useState("VND");
    
    const onChange = () => {
        setFrom(to);
        setTo(from);
        setCurrencyFrom(currencyTo);
        setCurrencyTo(currencyFrom);
        setTitleFrom(titleTo);
        setTitleTo(titleFrom);
    }

    useEffect(()=>{
        try {
            axios.get(`https://free.currconv.com/api/v7/convert?q=`+from+'_'+to+`&compact=ultra&apiKey=600aabae43359ea13979`)
            .then((response)=>{
                console.log(response.data[from+'_'+to]);
                setConvertRatio(response.data[from+'_'+to]);
                console.log(convertRatio);
            })
            .catch(()=>{(from==="USD")?setConvertRatio(USD_CNY):setConvertRatio(1/USD_CNY);
        })
            setCurrencyTo((currencyFrom*convertRatio).toString());
        } catch (error) {
           console.log('err', error);
        }
        
    },[convertRatio, currencyFrom])
1
    return (
        <View style = {styles.container}>
            <Header title = 'Currency Convert' backgroundColor = '#e066ff' color = '#fff' 
                iconLeft = {<Icon name = 'menu' size = {22} color = '#fff'/>}
                onPressLeft = {()=>navigation.toggleDrawer()}
            />
            <HeaderConvert from = {from}  to = {to} onPress = {onChange} color0 = 'blue' color1 = '#000'  color2 = '#78d663'/>
            <View style = {styles.content} >
                <Input title = {titleFrom} value = {currencyFrom} color = '#000'
                    onChangeText = {(text)=>setCurrencyFrom(text)} />
                <Input title ={titleTo} value = {round(parseFloat(currencyTo))}
                    color = '#78d663'
                />
                {/* <Button title = 'VND_CNY' onPress ={onVND_CNY}/> */}
            </View>
        </View>
    )
}