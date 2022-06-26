import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { PostContext } from "../ContextAPIs/PostContext";

export default function PostButton(){

   const {postData, setPostData} = useContext(PostContext)

    const onPost = ()=>{
        console.log(postData);
    }

    return(
        <TouchableOpacity style = {styles.Main} onPress = {onPost}>
            <Text style = {styles.Title}>POST</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    Main:{
        borderWidth: 1,
        borderColor: 'white',
        padding: 7,
        borderRadius: 9
    },
    Title:{
        fontWeight: 'bold',
        color: 'white'
    }
});





