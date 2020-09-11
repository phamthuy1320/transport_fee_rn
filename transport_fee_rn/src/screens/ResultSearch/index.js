import React,{useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Button, Header, Input} from '../../components';
import database from '../../services/database';
import {round, round05} from '../../functions/round';

const RowItem = (props) => {
    return (
        <View style = {[styles.row, props.width?{width:props.width}:null]}>
            <Text style= {[styles.title,props.widthTitle?{width:props.widthTitle}:null]}>{props.title}</Text>
            <Text style = {styles.value}>{props.value}</Text>
        </View>
    )
}

const ColumnItem= (props) => {
    return (
        <View style = {[styles.column,props.width?{width:props.width}:null]}>
            <Text style= {styles.title}>{props.title}</Text>
            <Text style = {styles.value}>{props.value}</Text>
        </View>
    )
}
const Bill = (props) => {
    return (
        <View style ={styles.contentContainer}>
            <View style = {[styles.column]}>
                <RowItem title = 'Tên mặt hàng' value = {props.name } width = '50%' widthTitle='100%'/>
                <RowItem title = 'Cân nặng' value = {props.weight +' kg'} width = '50%' widthTitle='100%'/>
            </View>
            <ColumnItem title = 'Dung tích: '
                value = {props.long +'x'+ props.width+' x'+ props.height +'='+ props.volumn +' cm3'}
            />
            
            <ColumnItem title = 'Số cân quy đổi: ' value = {round(props.volumn/6000) + ' kg'}/>
            <ColumnItem title = 'Nơi gửi: ' value = {props.sendPlace}/>
            <ColumnItem title = 'Nơi nhận: ' value = {props.receivePlace}/>
            
            <ColumnItem title = 'Thuế: ' value = {props?.vat}/>
            <ColumnItem title = 'Tổng: ' value = {props?.total + ' $'}/>
       </View>
    )
}

const FormInfo = () => {
    return(
        <View style ={styles.contentContainer}>
            <Text>You can fill this form and send, we will contact you</Text>
            <View style = {styles.infoForm}>
                <Input title='Tên:'/>
                <Input title='Số điện thoại:'/>
                <Input title='Zalo link'/>
            </View>
            <Button title = 'Gửi đi' backgroundColor = '#4f61a1' color='#fff'
                onPress = {()=>{alert('Thank you, We will contact with you soon.')}}/>
        </View>
    )
}

const Content = (props) =>{
    return(
        <ScrollView style = {{height:'90%'}}>
            <Bill
                name = {props?.name}
                weight = {props?.weight}
                long = {props?.long}
                width = {props?.width}
                height = {props?.height}
                sendPlace = {props?.sendPlace}
                receivePlace = {props?.receivePlace}
                volumn = {props?.volumn}
                vat = {props.vat}
                total = {props.total}
            />
            <FormInfo/>
        </ScrollView>
    )
}

const checkU10 = (weight) =>{
    if(weight>10&&weight<21){
        return "11kg +";
    }
    if(weight>=21&&weight<45){
        return "21kg +";
    }
    if(weight>=45&&weight<101){
        return "45kg +";
    }
    if(weight>=101&&weight<301){
        return "101kg +";
    }
    if(weight>=301&&weight<501){
        return "301kg +";
    }
    if(weight>=501&&weight<1000){
        return "501kg +";
    }
    if(weight>1000){
        return "1000kg +";
    }
}

export default function ResultSearch ({route,navigation}) {
    const {name} = route?.params;
    const {weight} = route?.params;
    const {long} = route?.params;
    const {width} = route?.params;
    const {height} = route?.params;
    const {sendPlace} = route?.params;
    const {receivePlace} = route?.params;
    const {diffTrans} = route?.params;
    const [volumn, setVolumn] = useState(parseFloat(long*width*height));
    const [total, setTotal] = useState(1)
    const [vat,setVat] = useState(0);
    const [weightU10, setWeightU10] = useState('11kg +');
    

    useEffect(()=>{
        setVat(0);
        try {
            database.ref('VN_CN').once('value')
            .then(
                (snapshot)=>{
                    const _weightVolumn = round05(parseFloat(volumn/6000).toFixed(3));
                    const _weight = weight>_weightVolumn?weight:_weightVolumn;
                    console.log('_weight', _weight)
                    if(_weight<=10){
                        snapshot.forEach(
                            (data) =>{
                                const _weight1 = data.child('weight').val();
                                if(_weight==_weight1){
                                    let _price = data.child('price').val();
                                    console.log('_price',_price);
                                    if(diffTrans) {
                                        setVat(0.2);
                                        setTotal(_price*1.2);
                                        if(width>=160||long>=160||height>=160){
                                            setVat(0.3);
                                            setTotal(_price*1.3)
                                        }
                                    }else{
                                        if(width>=160||long>=160||height>=160){
                                            setVat(0.1);
                                            setTotal(_price*1.1)
                                        }else{
                                            setVat(0);
                                            setTotal(_price);
                                        }
                                    }
                                }
                        }
                        )
                    }
                    else{
                        const __weight  =checkU10(_weight);
                        console.log('__weight',__weight);
                        snapshot.forEach(
                            (data)=>{
                                const _weight1 = data.child('weight').val();
                                if(__weight == _weight1){
                                    let _price = data.child('price').val() * _weight;
                                    if(diffTrans) {
                                        setVat(0.2);
                                        setTotal(_price*1.2);
                                        if(width>=160||long>=160||height>=160){
                                            setVat(0.3);
                                            setTotal(_price*1.3)
                                        }
                                    }else{
                                        if(width>=160||long>=160||height>=160){
                                            setVat(0.1);
                                            setTotal(_price*1.1)
                                        }
                                        else{
                                            setVat(0);
                                            setTotal(_price);
                                        }
                                    }
                                }
                                
                            }
                        )
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    },[long, weight, width, height])
    return (
        <View styles = {styles.container}>
            <Header title ='Bill' backgroundColor = '#f86000' color = '#fff' 
                iconLeft = {<Icon name = 'arrow-back' size = {22} color = '#fff'/>}
                onPressLeft = {()=>navigation.popToTop()}
            />
            
            <Content
                name = {name}
                weight = {weight}
                long = {long}
                width = {width}
                height = {height}
                sendPlace = {sendPlace}
                receivePlace = {receivePlace}
                volumn = {volumn}
                vat = {(vat*100).toString()+'%'}
                total = {total.toFixed(2)}
            />
            
            {/* <Button title = 'Contact us' onPress = {()=>{navigation.navigate('OrderScreen')}} /> */}
        </View>
    )
}