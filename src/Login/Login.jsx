import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from 'react-native';
import { authentication } from "../../Firebase/Firebase-Config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Login({navigation}){

    const onSignIn =()=>{
        // Sign In With Google...
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((userData)=>{
            // on Sucesss...
            // userData, contains data of the user....
            console.log(userData);
            navigation.navigate('Home');
        })
        .catch((error)=>{
            // on Failure
            console.log(error);
        })
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









