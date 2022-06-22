import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from 'react-native';
import UserProfile from "./UserProfile";
import Post from '../Post/Post';
import ContentView from "../Post/ContentView";

export default function Profile({route, navigation}){
    const {data} = route.params;

    console.log(data);
    return(
        <ScrollView>
        <View style = {styles.Mian}>
            <UserProfile navigation = {navigation}/>
            <ContentView data = {data}/>
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





