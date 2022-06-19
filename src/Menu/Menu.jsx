import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native";

export default function Menu({navigation}){

    let username = "Given Mathebula";
    let initial = username[0];

    const profileOnClick = ()=>{
        navigation.navigate('Profile');
    }

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

            <ScrollView>
            <View style = {styles.List}>
                <Text>List</Text>
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
    List:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        minHeight: '100%'
    }
});


