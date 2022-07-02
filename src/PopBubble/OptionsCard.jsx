import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function OptionsCard({icon, title}){

    return(
        <TouchableOpacity style = {styles.Main}>
            {icon}
            <Text style = {styles.Text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: 140,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        borderRadius: 18
    },
    Text:{
        fontWeight: 'bold',
        fontSize: 19
    }

});


