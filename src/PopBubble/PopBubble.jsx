import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OptionsCard from "./OptionsCard";
import { FontAwesome5 } from '@expo/vector-icons';

export default function PopBubble(){

    const userIcon = <FontAwesome5 name="user-edit" size={90} color="black" />

    return(
        <LinearGradient style = {styles.Root} colors={['#1560BD', '#F6ADC6', '#FF2E2E']}>
            <View style = {styles.Main}>
                <Text>POP the Bubble</Text>
                <View style = {styles.Window}>
                <Text style = {styles.Slogan}>Ready to meet the ideal partner? Are you available and ready to pop the bubble?</Text>
                </View>

                <OptionsCard icon = {userIcon} title = 'Profile'/>
               
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

    },
    Window:{
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 12,
        margin: 15
    }
});


