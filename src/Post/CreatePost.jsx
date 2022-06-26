import React, { useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import StyleComponent from "./StyleComponent";
import StylePostColours from './StylePostColours.json';
import { useContext } from "react";
import { PostContext } from "../ContextAPIs/PostContext";

export default function CreatePost({navigation}){

    const {postData, setPostData} = useContext(PostContext);

    const [value, setValue] = useState('');
    const [colour, setColour] = useState('white');
    const [textColour, setTextColour] = useState('black');
    const coloursArray = StylePostColours.colours;

    const onPost = ()=>{

        /*
            * Clicking post button...
            * Must only be clickable if the post content is not empty...
        */

        if(value !== ''){
            
            let type = 'plain_text';

            if(colour !== 'white'){
                // The colour is changed, therefore it is a styled post...
                type = 'style_text';
            }

            /* 
                * New post to be sent to the database...
                * Must add the user details on the post
            */

            const user = {userID: 'givenng6@gmail.com', username:'Given Mathebula'};
            const newPost = {type: type, text: value, theme: colour, user: user};
           
            // return back to the Explore page...
            navigation.replace('Home');
        }
    }

    const onClear = ()=>{
        /*
            * Removing the background colour...
            * Result in a plain text 
        */
        setColour('white');
        setTextColour('black');
    }

    const changeText = (text) =>{
        // Handling the the changes made on the post text...
        setValue(text);
        setPostData(text);
    }
   
    return(
        <View style = {styles.Main}>
            <View style = {{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderColor: 'gray',
                borderWidth: 1,
                width: '100%',
                height: 300,
                backgroundColor: colour,
                marginVertical: 20,
                borderRadius: 9,
                padding: 5
            }}>
                <TextInput style = {{
                    alignSelf: 'center',
                    fontSize: 20,
                    color: textColour,
                    padding: 5
                }} multiline value={value} onChangeText = {changeText} placeholder  = 'Share your thoughts...'/>
            </View>

            <View style = {styles.CompoHolder}>
            <TouchableOpacity style = {styles.Container}>
                <AntDesign name="picture" size={30} color="#0FBFBF" />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.Container} onPress={onClear}>
                <MaterialIcons name="layers-clear" size={30} color="#0FBFBF" />
                </TouchableOpacity>

                <ScrollView horizontal={true}>
                <View style = {styles.CompoHolder}>
                {
                    // Adding the colour panel, with all the colours from the JSON file...
                    coloursArray.map((currColour, index)=>
                    <StyleComponent 
                    key = {index}
                    colour = {currColour} 
                    setColour = {setColour} 
                    setTextColour = {setTextColour}/>
                    )
                }
                
                </View>
                </ScrollView>
                
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       width: '97%',
       flex: 1,
       margin: 5
    },
    CompoHolder:{
        display: 'flex',
       flexDirection: 'row',
    },
    Container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#0FBFBF',
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 5
    },
    Canvas:{
        alignSelf: 'center',
        fontSize: 20,

    }
    
});


