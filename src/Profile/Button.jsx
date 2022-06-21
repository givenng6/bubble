import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';


export default function Button(props){

    const onClick = ()=>{
        if(props.title === 'Catalogue'){
            props.navigation.navigate('Catalogue');
        }else if(props.title === 'Connections'){
            props.navigation.navigate('Connections');
        }else if(props.title === 'Options'){
           // Options do something...
        }
    }

    return(
        <TouchableOpacity style = {style.Main} onPress = {onClick}>
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
        borderRadius: 25,
        margin:7,
        //justifyContent: 'flex-start'
    },
    Title:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }
});





