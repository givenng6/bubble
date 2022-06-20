import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Entypo } from '@expo/vector-icons'; 

export default function StoryView(props){

    if(props.title === 'Add Story'){
        return(
            <View style = {styles.Main}>
                <TouchableOpacity style = {styles.AddCard}>
                    <Entypo name="plus" size={30} color="gray" />
                </TouchableOpacity>
                <Text style = {styles.Caption}>{props.title}</Text>
            </View>
        );
    }else{
        return(
            <View style = {styles.Main}>
                <TouchableOpacity style = {styles.Card}>
                    <Text>{props.Icon}</Text>
                </TouchableOpacity>
                <Text style = {styles.Caption}>{props.title}</Text>
            </View>
            
        );
    }

    

}

const styles = StyleSheet.create({
    Card:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        borderRadius: 100,
        marginTop: 5
    },
    Main:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'gray',
        margin: 5
    },
    Caption:{
        fontSize: 9,
        color: 'gray',
        fontWeight: '500'
    },
    AddCard:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'gray',
        width: 50,
        height: 50,
        borderRadius: 100,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'gray'
    }
});