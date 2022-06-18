import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from 'react-native';


export default function Login({navigation}){

    const onSignIn =()=>{
        navigation.navigate('Home');
    }

    return(
        <ImageBackground style = {styles.Main} source={require('./assets/background.jpeg')}  resizeMode='cover'>
            <Button title = 'SignIn' onPress={onSignIn}/>
        </ImageBackground>
       
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        flex: 1 
    }
});









