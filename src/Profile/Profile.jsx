import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import UserProfile from "./UserProfile";
import ContentView from "../Post/ContentView";

export default function Profile({route, navigation}){

    /*
        * isUser check if this person is looking at their own profile...

        * user contains the data about a user...

    */
    const {user, isUser} = route.params;
   
    return(
        <ScrollView>
        <View style = {styles.Mian}>
            <UserProfile navigation = {navigation} user = {user} isUser = {isUser}/>
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





