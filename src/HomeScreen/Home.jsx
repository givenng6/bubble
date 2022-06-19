import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import Feed from "./Feed";
import Chats from "../Messages/Chats";


const Tab = createBottomTabNavigator();
export default function Home({navigation}){

    return(
        <View style = {styles.Main}>
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} 
                options = {{headerShown: false}}/>
            <Tab.Screen name="Search" component={Search} 
                options = {{headerShown: false}}/>
            <Tab.Screen name="Chats" component={Chats} 
                options = {{headerShown: false}}/>
            <Tab.Screen name="Menu" component={Menu} 
               options = {{headerShown: false}}/>
            
        </Tab.Navigator>
           
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


