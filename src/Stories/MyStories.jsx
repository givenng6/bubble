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

        <TouchableOpacity style = {styles.FAB_Text} onPress = {onCreateText}>
            <MaterialCommunityIcons name="pencil" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style = {styles.FAB_Media}>
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
    FAB_Text:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 120, 
        right: 22,
        position: 'absolute',
        backgroundColor: '#0FBFBF',
        borderRadius: 100,
        width: 45,
        height: 45
    },
    FAB_Media:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 60, 
        right: 20,
        position: 'absolute',
        backgroundColor: '#0FBFBF',
        borderRadius: 100,
        width: 50,
        height: 50
    }
});



