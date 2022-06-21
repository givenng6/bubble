import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from 'react-native';
import BottomPanel from "../Post/BottomPanel";
import Post from "../Post/Post";
import PostHeader from "../Post/PostHeader";
import Stories from "../Stories/Stories";
import TopNavBar from "./TopNavBar";

export default function Explore({navigation}){

    return(
        <View style = {styles.Main}>
            <TopNavBar navigation = {navigation}/>
            <ScrollView>
                <View style = {styles.Scroller}>
                <Stories />
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                </View>
            </ScrollView>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        //backgroundColor: 'white',
        flex: 1
    },
    Scroller:{
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor: 'white',
        alignItems: 'center'
    }

});