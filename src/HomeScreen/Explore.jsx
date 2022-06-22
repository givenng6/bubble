import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Post from "../Post/Post";
import Stories from "../Stories/Stories";
import TopNavBar from "./TopNavBar";

export default function Explore({navigation}){

    // the collection of posts to show on the explore page...
    // must fetch from the database...
    const feed = [{type: 'plain_text', text:'Post that is plain', user:{userID: 'bubble@gmail.com', username:'Bubble App'}}, 
                {type: 'style_text', text: 'Post with style, with orange background', theme: 'orange', user:{userID: 'bubble@gmail.com', username:'Bubble App'}},
                {type: 'plain_text', text: "Social media are interactive digital channels that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks.", theme: 'white', user:{userID: 'social@gmail.com', username:'Social Media'}},
                {type: 'plain_text', text: "Google LLC is an American multinational technology company that focuses on artificial intelligence, search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.", theme: 'white', user:{userID: 'google@google.com', username:'Google'}},
                {type: 'style_text', text: "Tact is the knack of making a point without making an enemy.” “Gravity explains the motions of the planets, but it cannot explain who sets the planets in motion.", theme: '#333333', user:{userID: 'isaac@gmail.com', username:'Isaac Newton'}},
                {type: 'style_text', text: "Try not to become a man of success, but rather try to become a man of value.", theme: '#6897bb', user:{userID: 'albert@gmail.com', username:'Albert Einstein'}}];
    
    return(
        <View style = {styles.Main}>
            <TopNavBar navigation = {navigation}/>
            <ScrollView>
                <View style = {styles.Scroller}>

                <Stories />

                {feed.map((item, index)=>
                // Iterating through the list of feeds...
                // passing each data to the Post component for futher extraction
                <Post key = {index} post = {item}/>
                )}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flex: 1
    },
    Scroller:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

});