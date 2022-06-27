import React, { useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ColourPalate from '../Post/StylePostColours.json';

export default function CreateText(){

    // import colours from JSON... 
    const coloursArray = ColourPalate.colours;

    // random number for init the position of the colour...
    const randomInit = Math.floor(Math.random() * coloursArray.length);
    const [index, setIndex] = useState(randomInit);

    const [colour, setColour] = useState(coloursArray[randomInit]);
    const [brushColour, setBrushColour] = useState('white');

    const onChangeColour = ()=>{
        setColour(coloursArray[index]);
        if(index <= coloursArray.length){
            setIndex(index + 1);
        }else{
            // reset when reach the end of the list...
            setIndex(0);
        }
    }

    return(
        <View style = {[styles.Main, {backgroundColor: colour}]}>
            <View style = {styles.Canvas}>
                <TextInput multiline placeholder="Compose a Story" style={{fontSize: 18, color: brushColour}}/>
            </View>
           
            <TouchableOpacity style = {[styles.FAB_Colour, {borderColor: brushColour}]} onPress={onChangeColour}>
            <FontAwesome name="paint-brush" size={24} color={brushColour} />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 45,
        padding: 15,
        //flexWrap: 'wrap',
        //backgroundColor:'gray'
    },
    FAB_Colour:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: 50, 
        right: 15,
        borderWidth: 1,
        position: 'absolute',
        borderRadius: 100,
        width: 45,
        height: 45
    },
    Canvas:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //borderColor: 'gray',
        //borderWidth: 1,
        width: '100%',
        height: '90%',
    }
});


