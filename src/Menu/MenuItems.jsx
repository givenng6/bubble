import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const MenuItems = (props)=>{

    
    return(
        <TouchableOpacity style = {styles.Main}>
            {props.icon}
            <Text style = {styles.Name}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#edf4f5',
        width: 170,
        height: 80,
        margin: 12,
        borderRadius: 11,
       
    },
    Name:{
        fontWeight: 'bold',
    }
});


export default MenuItems;

