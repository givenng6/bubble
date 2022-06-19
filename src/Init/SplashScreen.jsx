import React, { useState } from "react";
import {View, Text, StyleSheet} from 'react-native';


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
            <Text style = {styles.Name}>Bubble</Text>
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
    }
});




