import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function OptionsCard({icon, title}){

    return(
        <TouchableOpacity style = {styles.Main}>
        <LinearGradient style = {styles.Main} colors={['#1560BD', '#F6ADC6', '#FF2E2E']}>
            {icon}
            <Text style = {styles.Text}>{title}</Text>
        </LinearGradient>
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
        fontSize: 19,
        color: 'white'
    }

});


