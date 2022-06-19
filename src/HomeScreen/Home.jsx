import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from 'react-native';
import logo from '../assets/bc.jpeg';

export default function Home(){

    return(
        <View style = {styles.Main}>
            <View style = {styles.TopNav}>
               <Image style = {styles.Logo} source = {logo}/>
            </View>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        backgroundColor: 'white',
        flex: 1
    },
    TopNav:{
        display: 'flex',
        marginTop: 40,
        backgroundColor:'white',
        padding: 4
    },
    AppName:{
        fontWeight: 'bold',
        fontSize: 25,
        //fontFamily: 'sans-serif-medium'
    },
    Logo:{
        width: 110,
        height: 35,
        marginLeft: 11,
        marginTop: 11
    }
});


