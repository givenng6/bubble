import React, { useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ColourPalate from '../Post/StylePostColours.json';

export default function CreateText(){

    const [index, setIndex] = useState(0);
    const coloursArray = ColourPalate.colours;
    const [colour, setColour] = useState('gray');
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
            <Text>Hello</Text>

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
    }
});


