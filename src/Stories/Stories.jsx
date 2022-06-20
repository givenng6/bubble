import React from "react";
import { View, StyleSheet } from "react-native";
import StoryView from "./StoryView";


export default function Stories(){


    return(
        <View style = {styles.Main}>
            <StoryView/>
        </View>
    );

}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'row'
    }
});







