import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import UserProfile from "./UserProfile";
import ContentView from "../Post/ContentView";

export default function Profile({navigation}){
   
    return(
        <ScrollView>
        <View style = {styles.Mian}>
            <UserProfile navigation = {navigation}/>
            <ContentView />
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





