import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PopBubble(){
    return(
        <LinearGradient style = {styles.Main} colors={['#1560BD', '#F6ADC6', '#FF2E2E']}>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    }
});


