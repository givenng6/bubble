import React, { useState } from "react";
import { Text, StyleSheet,TouchableWithoutFeedback } from "react-native";

export default function ModalClickables(props){

    const onAction = ()=>{
        
        switch(props.title){
            case 'Close':
                // dismissing the modal...
                props.setVisible(false);
                break;
            case 'Report':
                // Report the user or the post
                break;
            case 'View Profile':
                // View the user profile...
                break;
        }
       
    }

    return(
        <TouchableWithoutFeedback onPress={onAction}>
            <Text style = {{
                color: props.colour,
                fontWeight: '600',
                fontSize: 16,
                margin: 3,
            }}>{props.title}</Text>
        </TouchableWithoutFeedback>     
    );
}
