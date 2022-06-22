import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BottomPanel from "./BottomPanel";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";


export default function Post(props){
    return(
        <View style = {styles.Main}>
            <PostHeader user = {props.post.user} navigation = {props.navigation}/>
            <PostBody post = {props.post}/>
            <BottomPanel />
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        width: '97%',
        marginTop: 4,
        marginBottom: 5,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#ebebf0',
        borderRadius: 12,
        padding: 5
    }
});