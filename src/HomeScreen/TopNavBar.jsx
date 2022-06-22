import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native"; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import logo from '../assets/bc.jpeg';

export default function TopNavBar(props){

    let name = 'G';
    const profileOnClick = ()=>{
        // When click to view own profile... 
        
        props.navigation.navigate('Profile', {user: props.currUser, isUser: true});
    }

    const onCreatePost = ()=>{
        // When click, create post... 
        // Must send relevent data...
        props.navigation.navigate('CreatePost');
    }

    const onSearch = ()=>{
        props.navigation.navigate('Search');
    }

    return(
        <View style = {styles.Main}>
            <View style = {styles.Container}>
                <Image style = {styles.Logo} source = {logo}/>
                <View style = {styles.Items}>
                    <TouchableOpacity onPress={onCreatePost}>
                    <Entypo name="plus" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.Space} onPress = {onSearch}>
                    <Ionicons name="ios-search" size={30} color="black" />
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
        marginTop: 35,
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
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: 11,
        //borderColor: '#51E5C1'
    },
    Initial:{
        fontSize: 25,
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
        alignItems: 'center',
        marginRight: 11,
        marginTop: 8
    },
    Space:{
        marginLeft: 11,
    }
});







