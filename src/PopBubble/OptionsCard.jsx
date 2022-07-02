import React from "react";
import { View, StyleSheet, Text } from "react-native";


export default function OptionsCard({icon, title}){

    return(
        <View style = {styles.Main}>
            {icon}
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18
    }

});


