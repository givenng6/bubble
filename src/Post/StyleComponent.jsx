import React, { useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function StyleComponent(props){
   const colour = props.colour;

    return(
        <TouchableOpacity style = {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colour,
            width: 50,
            height: 50,
            borderRadius: 100,
            margin: 5
            }}>
        </TouchableOpacity>
           
    );
}

