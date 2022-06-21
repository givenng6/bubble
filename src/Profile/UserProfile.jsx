import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function UserProfile(){
    return(
        <View style = {styles.Main}>
            <TouchableOpacity style = {styles.Profile}>
            <FontAwesome name="user" size={150} color="white" />
            </TouchableOpacity>

            <View style = {styles.ListOpt}>

            <TouchableOpacity style = {styles.Options}>
            <Entypo name="camera" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.Options}>
            <Ionicons name="settings" size={24} color="white" />
            </TouchableOpacity>

            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'row',
        margin: 11,
        alignSelf: 'center'
        //justifyContent: 'center'
    },
    Profile:{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 200,
        width: 200,
        height: 200,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Options:{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 200,
        width: 40,
        height: 40,
        backgroundColor: 'gray',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ListOpt:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

});










