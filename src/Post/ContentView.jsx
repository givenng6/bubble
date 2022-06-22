import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Post from "./Post";


export default function ContentView(props){

    const [isPost, setIsPost] = useState(true);
    const [postColor, setPostColor] = useState('#0FBFBF');
    const [photoColor, setPhotoColor] = useState('gray');

    const onChangeTab = ()=>{
        setIsPost(!isPost);
        if(isPost){
            setPhotoColor('gray');
            setPostColor('#0FBFBF');
        }else{
            setPhotoColor('#0FBFBF');
            setPostColor('gray');
        }
    }

    return(
        <View style = {styles.Main}>
            <View style = {styles.Tab}>
                <TouchableWithoutFeedback onPress={onChangeTab}>
                    <View>
                    <Text style = {{fontWeight: '700',
                                        fontSize: 18,
                                        color: postColor,
                                        padding: 11}}>Posts</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onChangeTab}>
                    <View>
                    <Text style = {{fontWeight: '700',
                                        fontSize: 18,
                                        color: photoColor,
                                        padding: 11}}>Photos</Text>
                    </View>
                        
                </TouchableWithoutFeedback>
            </View>
            {
                // Must display all the posts by the current user...
            }
        </View>
    );
}


const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '97%',
        
    },
    Tab:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'gray'
        
    },
    Title: {
        fontWeight: '700',
        fontSize: 18,
        color: 'gray',
        padding: 11
    },
    TitleClicked:{
        ontWeight: '700',
        fontSize: 18,
        color: '#0FBFBF',
        padding: 11
    }
});



