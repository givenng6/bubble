import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from 'react-native';
import TopNavBar from "./TopNavBar";

export default function Feed({navigation}){

    return(
        <View >
             <TopNavBar navigation = {navigation}/>
        
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        backgroundColor: 'white',
        flex: 1
    },

});