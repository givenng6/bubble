import React, { useState } from "react";
import {Text, View, StyleSheet} from 'react-native';


export default function StyleText(props){
   const theme = props.theme;
    return(
        <View style = {{display: 'flex', flexDirection: 'column',backgroundColor: theme}}> 
            <Text style = {styles.Main}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        margin: 15, 
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
        color: 'white'
    }
});