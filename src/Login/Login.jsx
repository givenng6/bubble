import React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { authentication } from "../../Firebase/Firebase-Config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export default function Login({navigation}){

    useEffect(() => {
        const provider = new GoogleAuthProvider();
        //const results = signInWithPopup(authentication, provider);
      });

   

        const onSignIn =()=>{
            // Sign In With Google...
            
           
        }

    return(
       

        <WebView style = {styles.Main}>
             
        </WebView>
       
    );
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        flex: 1 
    }
});









