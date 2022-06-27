import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";



export default function MyStories(){

    return(
    <View style = {styles.Main}>

        <TouchableOpacity style = {styles.FAB_Text}>

        </TouchableOpacity>

        <TouchableOpacity style = {styles.FAB_Media}>

        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    FAB_Text:{
        display: 'flex',
        flexDirection: 'column',
        bottom: 120, 
        right: 22,
        position: 'absolute',
        backgroundColor: '#0FBFBF',
        borderRadius: 100,
        width: 45,
        height: 45
    },
    FAB_Media:{
        display: 'flex',
        flexDirection: 'column',
        bottom: 60, 
        right: 20,
        position: 'absolute',
        backgroundColor: '#0FBFBF',
        borderRadius: 100,
        width: 50,
        height: 50
    }
});



