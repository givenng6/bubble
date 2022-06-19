import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from 'react-native'
import ChatThumbnail from "./ChatThumbnail";

export default function Chats(){
    let ScreenHeight = Dimensions.get("window").height;
    return(
        <View style = {styles.Main}>
            <View style = {styles.Header}>
                <Text style = {styles.Title}>Chats</Text>
            </View>
            <ScrollView>
                <View style = {{display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            flexWrap: 'wrap',
                            //minHeight: ScreenHeight,
                            justifyContent: 'center'}}>


                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                   <ChatThumbnail />
                </View>
            </ScrollView>

            <TouchableOpacity style = {styles.FAB}>
            <FontAwesome5 name="pen" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0FBFBF'
    },
    FAB:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 60,
        backgroundColor: '#0FBFBF',
        borderRadius: 100,
    },
    Header:{
        displayL: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0FBFBF',
        marginTop: 40, 
        padding: 11
    },
    Title:{
        fontWeight: 'bold',
        marginLeft: 12,
        fontSize: 30,
        color: 'white'
    }
});