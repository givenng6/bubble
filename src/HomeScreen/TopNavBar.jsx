import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native"; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import logo from '../assets/bc.jpeg';

export default function TopNavBar(props){

    let name = 'A';
    const profileOnClick = ()=>{
        props.navigation.navigate('Profile');
    }

    return(
        <View style = {styles.Main}>
            <View style = {styles.Container}>
                <Image style = {styles.Logo} source = {logo}/>
                <View style = {styles.Items}>
                    <TouchableOpacity>
                    <Entypo name="plus" size={40} color="#0b0f17" />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.Space}>
                    <Ionicons name="ios-search" size={37} color="#0b0f17" />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.Account} onPress = {profileOnClick}>
                        <Text style = {styles.Initial}>{name}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 40,
        backgroundColor:'white',
        padding: 4
    },
    AppName:{
        fontWeight: 'bold',
        fontSize: 25,
        //fontFamily: 'sans-serif-medium'
    },
    Logo:{
        display: 'flex',
        flexDirection: 'row',
        width: 139,
        height: 45,
        marginLeft: 11,
        marginTop: 11,
    },
    Account:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0FBFBF',
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
    Container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    Items:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 11,
        marginTop: 8
    },
    Space:{
        marginLeft: 11,
    }
});







