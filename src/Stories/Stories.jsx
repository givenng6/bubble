import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import StoryView from "./StoryView";


export default function Stories({navigation}){


    return(
        <View style = {styles.Main}>
            <ScrollView horizontal = {true}>
            <View style = {styles.OtherStories}>
                <StoryView title = 'Add Story' navigation = {navigation}/>
                <StoryView title = 'Given'/>
                <StoryView title = 'Joseph'/>
                <StoryView title = 'Sizwe'/>
                <StoryView title = 'NG'/>
                <StoryView title = 'Girlfriend'/>
                <StoryView title = 'Wits'/>
                <StoryView title = 'Brian'/>
                
            </View>
            </ScrollView>

            
        </View>
    );

}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'row',
        width: '97%',
    },
    AddStory:{
        display: 'flex',
        flexDirection: 'row'
    },
    OtherStories:{
        display: 'flex',
        flexDirection: 'row',
        //overflow: 'hidden'
    }
});







