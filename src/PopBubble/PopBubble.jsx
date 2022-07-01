import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PopBubble(){
    return(
        <LinearGradient style = {styles.Root} colors={['#1560BD', '#F6ADC6', '#FF2E2E']}>
            <View style = {styles.Main}>
                <Text>POP the Bubble</Text>
                <Text style = {styles.Slogan}>Ready to meet the ideal partner? Are you available and ready to pop the bubble?</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    Root:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    Main:{
        display: 'flex',
        flex: 1,
        marginTop: 40,
        flexDirection: 'column',
    },
    Slogan:{
        fontWeight: 'bold',
        fontSize: 27,
        color: 'white',
        padding: 15

    }
});


