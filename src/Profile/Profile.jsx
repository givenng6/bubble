import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from 'react-native';
import UserProfile from "./UserProfile";
import Post from '../Post/Post';

export default function Profile({navigation}){

    return(
        <ScrollView>
        <View style = {styles.Mian}>
            <UserProfile navigation = {navigation}/>
            
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    Mian: {
        display:'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    }
});





