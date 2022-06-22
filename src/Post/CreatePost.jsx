import React, { useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import StyleComponent from "./StyleComponent";

export default function CreatePost(){

    const [colour, setColour] = useState('');

    const onChange = ()=>{
        setColour('#6897bb');
    }
   
    return(
        <View style = {styles.Main}>
            <View style = {styles.CompoHolder}>
                <TouchableOpacity style = {styles.Container}>
                <AntDesign name="picture" size={30} color="#0FBFBF" />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.Container}>
                <MaterialIcons name="layers-clear" size={30} color="#0FBFBF" />
                </TouchableOpacity>

                <ScrollView horizontal={true}>
                <View style = {styles.CompoHolder}>

               
                <StyleComponent colour = '#ff80ed' setColour = {setColour}/>
                
                <StyleComponent colour = '#ff7373' setColour = {setColour}/>

                <StyleComponent colour = '#ff0000' setColour = {setColour}/>
                <StyleComponent colour = '#990000' setColour = {setColour}/>

                <StyleComponent colour = '#ffd700' setColour = {setColour}/>
                <StyleComponent colour = '#daa520' setColour = {setColour}/>

                <StyleComponent colour = '#0000ff' setColour = {setColour}/>
                <StyleComponent colour = '#088da5' setColour = {setColour}/>
                <StyleComponent colour = '#6897bb' setColour = {setColour}/>
                <StyleComponent colour = '#00ffff' setColour = {setColour}/>

                <StyleComponent colour = '#065535' setColour = {setColour}/>
                <StyleComponent colour = '#008000' setColour = {setColour}/>
                <StyleComponent colour = '#00ff7f' setColour = {setColour}/>
                <StyleComponent colour = '#d3ffce' setColour = {setColour}/>

                <StyleComponent colour = '#666666' setColour = {setColour}/>
                <StyleComponent colour = '#333333' setColour = {setColour}/>
                <StyleComponent colour = '#000000' setColour = {setColour}/>
                </View>
                </ScrollView>
                
            </View>
            <View style = {{
                display: 'flex',
                flexDirection: 'column',
                borderColor: 'black',
                borderWidth: 1,
                width: '100%',
                height: 200,
                backgroundColor: colour
            }}>
                <Text>Canvas</Text>
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
        display: 'flex',
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        height: 200
    },
    Click:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'green',
        alignSelf: 'center'
    }
    
});