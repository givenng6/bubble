import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native";
import { Dimensions } from 'react-native'
import MenuItems from './MenuItems';
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export default function Menu({navigation}){

    let username = "Given Mathebula";
    let initial = username[0];
    let ScreenHeight = Dimensions.get("window").height;

    const profileOnClick = ()=>{
        navigation.navigate('Profile');
    }

    const Group = <FontAwesome name="group" size={34} color="#0FBFBF" />
    const PopBubble = <FontAwesome name="heartbeat" size={34} color="tomato" />
    const Course = <FontAwesome5 name="book-reader" size={34} color="#0FBFBF" />
    const Bursary = <Foundation name="page-search" size={34} color="#0FBFBF" />
    const About = <Entypo name="info-with-circle" size={34} color="#0FBFBF" />
    const Settings = <Feather name="settings" size={34} color="#0FBFBF" />
    const Logout = <Entypo name="log-out" size={34} color="#0FBFBF" />

    return(
        <View style = {styles.Main}>
            <TouchableOpacity style = {styles.Profile} onPress = {profileOnClick}>
                <TouchableOpacity style = {styles.Account} onPress = {profileOnClick}>
                    <Text style = {styles.Initial}>{initial}</Text>
                </TouchableOpacity>
                <View style = {styles.Details}>
                    <Text style = {styles.Username}>{username}</Text>
                    <Text style = {styles.Hint}>Click to view your profile</Text>
                </View>
            </TouchableOpacity>
            <Text style = {styles.Menu}>Menu</Text>

            <ScrollView>
            <View style = {{display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            flexWrap: 'wrap',
                            minHeight: ScreenHeight,
                            height: ScreenHeight,
                            justifyContent: 'center'}}>
               <MenuItems title = 'Groups' icon = {Group}/>
               <MenuItems title = 'Pop the Bubble' icon = {PopBubble}/>
               <MenuItems title = 'Courses' icon = {Course}/>
               <MenuItems title = 'Bursaries' icon = {Bursary}/>
               <MenuItems title = 'About' icon = {About}/>
               <MenuItems title = 'Settings' icon = {Settings}/>
               <MenuItems title = 'Log Out' icon = {Logout}/>

            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0FBFBF'
    },
    Profile:{
        displayL: 'flex',
        flexDirection: 'row',
        backgroundColor: '#0FBFBF',
        marginTop: 40, 
        padding: 11
    },
    Account:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#51E5C1',
        width: 45,
        height: 45,
        borderRadius: 30,
        marginLeft: 11,
        //borderColor: '#51E5C1'
    },
    Initial:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    Details:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    Username:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 12,
        color: 'white'
    },
    Hint:{
        marginLeft: 12,
        fontSize: 11,
        color: '#d9d9d9',
        fontWeight: 'bold',
    },
    Menu:{
        fontWeight: 'bold',
        padding: 12,
        marginLeft: 12,
        fontSize: 44,
        color: 'white'
    }
});


