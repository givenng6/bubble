import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { PostContext } from "../ContextAPIs/PostContext";

export default function PostButton(){

   const {postData, setPostData, metaData, setMetaData, setNavigation, navigation} = useContext(PostContext);

    const onPost = ()=>{
       
        if(postData !== ''){
            /*
                In a case of text, if not empty...
                Combile the metaData and postData...
                Send the metaData and the postData to the cloud...
                Close the create post window...
                Clear the Post Context... 
                Clear metaData...
                Set navigation to null...
            */
            setPostData('');
            setMetaData('');
            setNavigation(null);
            navigation.navigate('Home');
        }
        
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





