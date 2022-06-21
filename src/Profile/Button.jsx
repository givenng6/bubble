import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';


export default function Button(props){
    return(
        <TouchableOpacity style = {style.Main}>
            <Text style = {style.Title}>{props.title}</Text>
        </TouchableOpacity>
    );
}


const style = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0FBFBF',
        padding: 7,
        borderRadius: 9,
        margin:11,
        //justifyContent: 'flex-start'
    },
    Title:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }
});





