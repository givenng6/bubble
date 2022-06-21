import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PlainText from "./PlainText";


export default function PostBody(){
    const text = 'Welcome to Bubble, the only platform that is build for university students by a university student😇.';
    return(
        <View style = {styles.Main}>
            <PlainText text = {text}/>
        </View>
       
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 12
    }
});











