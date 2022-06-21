import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from 'react-native';
import UserProfile from "./UserProfile";

export default function Profile(){

    return(
        <View style = {styles.Mian}>
            <UserProfile/>
        </View>
    );
}


const styles = StyleSheet.create({
    Mian: {
        display:'flex',
        flexDirection: 'column',
        flex: 1,
    }
});





