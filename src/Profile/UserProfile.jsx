import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Button from "./Button";



export default function UserProfile(props){

    // State of the user
    const user = props.user;
    const isUser = props.isUser;
    
    const navigation = props.navigation;

    return(
        <View style = {styles.Main}>
            <View style = {styles.User}>
            <TouchableOpacity style = {styles.Profile}>
            <FontAwesome name="user" size={150} color="white" />
            </TouchableOpacity>
            
            </View>
            <View style = {styles.ListOpt}>

            <TouchableOpacity style = {styles.Options}>
                {isUser &&
                    <Entypo name={"camera"} size={24} color="white" />
                }
                {!isUser &&
                     <Feather name="user-plus" size={24} color="white" />
                }
            
            </TouchableOpacity>
            <TouchableOpacity style = {styles.Options}>
            {isUser &&
                 <Ionicons name={"settings"} size={24} color="white" />
            }
           
            {!isUser &&
                <Entypo name="chat" size={24} color="white" />
            }
            </TouchableOpacity>

            </View>
            <Text style = {styles.Username}>{user.username}</Text>
            <Text>Some bio</Text>
    
            <View style = {styles.ListOpt}>
        
            <Button title = 'Catalogue' navigation = {navigation}/>
            <Button title = 'Connections' navigation = {navigation}/>

            {!isUser &&
                 <Button title = 'Options'/>
            }
           
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        padding: 11,
        alignItems: 'center',
        //borderBottomWidth: 1,
        borderBottomColor: 'gray',
        width: '97%',
        alignSelf: 'center',
        //backgroundColor: 'white'
        //backgroundColor: 'white'
        
    },
    Profile:{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 200,
        width: 200,
        height: 200,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Options:{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 200,
        width: 40,
        height: 40,
        backgroundColor: 'gray',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ListOpt:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    User:{
        display: 'flex',
        flexDirection: 'row',
        margin: 11,
        alignSelf: 'center'
    },
    Username:{
        fontWeight: 'bold',
        fontSize: 22
    }

});










