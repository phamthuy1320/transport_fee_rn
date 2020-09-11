import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ResultSearch from '../screens/ResultSearch';
import OrderScreen from '../screens/OrderScreen';
import CurrencyConvert from '../screens/CurrencyConvert';
import DrawerContent from './DrawerContent';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () =>{
    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}
            initialRouteName='HomeScreen'
        >
            <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
            <Stack.Screen name = 'ResultSearch' component = {ResultSearch}/>
            <Stack.Screen name = 'OrderScreen' component = {OrderScreen}/>
        </Stack.Navigator>
    )
}

const HomeTab = () =>{
    return (
        <Tab.Navigator 
            tabBarOptions={{labelStyle:{fontSize:16, marginBottom:10},
            inactiveTintColor:'#56569b', activeTintColor:'#5cff0b'}}
            
        >
            <Tab.Screen name = 'HomeStack' component = {HomeStack}
                options={{title:'Home'}}
            />
            <Tab.Screen name = 'CurrencyConvert' component = {CurrencyConvert} options = {{title:'Currency Convert'}}/>
        </Tab.Navigator>
    )
}

const HomeDrawer = () => {
    return (
        <Drawer.Navigator drawerContent = {DrawerContent} >
            <Drawer.Screen name = 'HomeTab' component = {HomeTab}/>
            <Drawer.Screen name = 'CurrencyConvert' component = {CurrencyConvert}/>
            {/* <Drawer.Screen name = 'OrderScreen' component = {OrderScreen}/> */}
        </Drawer.Navigator>
    )
}
export default function AppNavigation (){
    return (
        <NavigationContainer>
            <HomeDrawer/>
        </NavigationContainer>
    )
}