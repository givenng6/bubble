import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PlainText from "./PlainText";
import StyleText from "./StyleText";


export default function PostBody(props){
    const text = 'Welcome to Bubble, the only platform that is build for university students by a university student😇.';
    const errorMsg = "Can't show this post, reason your application might be out of date. Please update to the latest version";

    if(props.type === 'plain_text'){
        return(
            <PlainText text = {text}/>
        );
       
    }else if(props.type === 'style_text'){
        return(
            <View style = {styles.Main}>
               <StyleText text = {text} theme = 'orange'/>
            </View>
           
        );
    }else{
        // If feature is only available on the latest update...
        return(
            <View>
                <Text style = {styles.Error}>{errorMsg}</Text>
            </View>
        );
        
    }

    
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 12
    },
    Error:{
        color: 'red',
        fontWeight: '500',
        padding: 11

    }
});











