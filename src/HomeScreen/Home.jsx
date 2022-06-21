import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from "../Menu/Menu";
import { Entypo } from '@expo/vector-icons'; 
import Explore from "./Explore";
import Notifications from "../Notifications/Notifications";
import Chats from "../Messages/Chats";


const Tab = createBottomTabNavigator();
export default function Home({navigation}){

    return(
        <View style = {styles.Main}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Explore') {
                    iconName = 'home';
                  } else if (route.name === 'Notifications') {
                    iconName = 'notification';
                  }else if(route.name === 'Chats'){
                    iconName = 'chat';
                  }else if(route.name === 'Menu'){
                    iconName = 'menu';
                  }
    
                  return <Entypo name= {iconName} size={30} color={color} />;
                },
                tabBarActiveTintColor: '#0FBFBF',
                tabBarInactiveTintColor: 'gray',
              })}
        
        >
            <Tab.Screen name="Explore" component={Explore} 
                options = {{headerShown: false}}/>
            <Tab.Screen name="Notifications" component={Notifications} 
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
        //backgroundColor: 'white',
        flex: 1
    },

});


