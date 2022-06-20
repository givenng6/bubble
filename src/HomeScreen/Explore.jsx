import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from 'react-native';
import BottomPanel from "../Post/BottomPanel";
import Post from "../Post/Post";
import PostHeader from "../Post/PostHeader";
import TopNavBar from "./TopNavBar";

export default function Explore({navigation}){

    return(
        <View style = {styles.Main}>
            <TopNavBar navigation = {navigation}/>
            
            <Post />
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