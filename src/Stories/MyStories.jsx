import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function MyStories({navigation}){

    const onCreateText = ()=>{
        navigation.navigate('CreateText');
    }

    return(
    <View style = {styles.Main}>

        <TouchableOpacity style = {[styles.FAB, {bottom: 120}]} onPress = {onCreateText}>
            <MaterialCommunityIcons name="pencil" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style = {[styles.FAB, {bottom: 60}]}>
        <MaterialIcons name="add-a-photo" size={24} color="white" />
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    FAB:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //bottom: 120, 
        right: 20,
        position: 'absolute',
        backgroundColor: '#0FBFBF',
        borderRadius: 100,
        width: 53,
        height: 53
    },

});



