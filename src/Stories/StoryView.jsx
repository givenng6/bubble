import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function StoryView(){


    return(
        <View style = {styles.Main}>
            <TouchableOpacity style = {styles.Card}>
                <Text>A</Text>
            </TouchableOpacity>
            <Text style = {styles.Caption}>Add Story</Text>
        </View>
        
    );

}

const styles = StyleSheet.create({
    Card:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        borderRadius: 100,
        marginLeft: 11,
        margin: 5
    },
    Main:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTopWidth: 0.5,
        width: '97%',
        borderColor: 'gray'
       
    },
    Caption:{
        fontSize: 9,
        color: 'gray',
        fontWeight: '500'
    }
});