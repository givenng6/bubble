import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from 'react-native';


export default function Home(){

    return(
        <View style = {styles.Main}>
            <View style = {styles.TopNav}>
                <Text style = {styles.AppName}>Bubble</Text>
            </View>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        backgroundColor: 'gray',
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
    }
});


