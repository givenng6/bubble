import React, { useState } from "react";
import {Text, View, StyleSheet} from 'react-native';


export default function PlainText(props){
   
    return(
        <Text style = {styles.Main}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    Main:{
        margin: 5, 
        //fontWeight: '500',
        fontSize: 15,
        alignSelf: 'center'
    }
});







