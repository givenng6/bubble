import React, { useState } from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import logo from '../assets/bc.jpeg';

export default function SplashScreen({navigation}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const splash = ()=>{
        // after loading enough data must skip... 
        setTimeout(()=>{
            if(isLoggedIn){
                navigation.replace('Home');
            }else{
                navigation.replace('Terms');
            }
            
        }, 3000);
    }

    return(
        <View style = {styles.Main}>
            <Image style = {styles.Logo} source = {logo}/>
            {splash()}
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    Name:{
        fontSize: 55,
        fontWeight: 'bold',
        color: 'gray'
    },
    Logo:{
        width: 350,
        height: 100
    }
});




