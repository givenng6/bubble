import React, { useState } from "react";
import {Text, View, StyleSheet} from 'react-native';


export default function PlainText(props){
    const [textSize, setTextSize] = useState(16);

    

    return(
        <Text style = {{margin: 5, 
                    fontWeight: '500',
                fontSize: textSize,
            alignSelf: 'center'}}
                    >{props.text}</Text>
    );
}









