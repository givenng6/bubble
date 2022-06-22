import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from 'react-native';
import BottomPanel from "../Post/BottomPanel";
import Post from "../Post/Post";
import PostHeader from "../Post/PostHeader";
import Stories from "../Stories/Stories";
import TopNavBar from "./TopNavBar";

export default function Explore({navigation}){
    let data = [{type: 'plain_text', text:'Hi'}];
    
    return(
        <View style = {styles.Main}>
            <TopNavBar navigation = {navigation} data = {data}/>
            <ScrollView>
                <View style = {styles.Scroller}>
                <Stories />
                {data.map((item, index)=>
                    <Post 
                    key = {index}
                    post = {item}
                    />
                )}
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