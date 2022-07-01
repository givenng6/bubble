import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const MenuItems = (props)=>{

    const onOpen = ()=>{
        
        switch (props.option){
            case 'pop_bubble':
                props.navigation.navigate('PopBubble');
                break;
            
            default:
                // do nothing... 
        }
    }
    
    return(
        <TouchableOpacity style = {styles.Main} onPress={onOpen}>
            {props.icon}
            <Text style = {styles.Name}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 170,
        height: 80,
        margin: 12,
        borderRadius: 11,
       
    },
    Name:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'gray',
    }
});


export default MenuItems;

