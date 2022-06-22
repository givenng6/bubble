import React, { useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import StyleComponent from "./StyleComponent";

export default function CreatePost(){

    const [colour, setColour] = useState('white');
    const [textColour, setTextColour] = useState('black');

    const onClear = ()=>{
        setColour('white');
        setTextColour('black');
    }
   
    return(
        <View style = {styles.Main}>
            <View style = {styles.CompoHolder}>
                <TouchableOpacity style = {styles.Container}>
                <AntDesign name="picture" size={30} color="#0FBFBF" />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.Container} onPress={onClear}>
                <MaterialIcons name="layers-clear" size={30} color="#0FBFBF" />
                </TouchableOpacity>

                <ScrollView horizontal={true}>
                <View style = {styles.CompoHolder}>

               
                <StyleComponent colour = '#ff80ed' setColour = {setColour} setTextColour = {setTextColour}/>
                
                <StyleComponent colour = '#ff7373' setColour = {setColour} setTextColour = {setTextColour}/>

                <StyleComponent colour = '#ff0000' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#990000' setColour = {setColour} setTextColour = {setTextColour}/>

                <StyleComponent colour = '#ffd700' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#daa520' setColour = {setColour} setTextColour = {setTextColour}/>

                <StyleComponent colour = '#0000ff' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#088da5' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#6897bb' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#00ffff' setColour = {setColour} setTextColour = {setTextColour}/>

                <StyleComponent colour = '#065535' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#008000' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#00ff7f' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#d3ffce' setColour = {setColour} setTextColour = {setTextColour}/>

                <StyleComponent colour = '#666666' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#333333' setColour = {setColour} setTextColour = {setTextColour}/>
                <StyleComponent colour = '#000000' setColour = {setColour} setTextColour = {setTextColour}/>
                </View>
                </ScrollView>
                
            </View>
            <View style = {{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderColor: 'gray',
                borderWidth: 1,
                width: '100%',
                height: 200,
                backgroundColor: colour
            }}>
                <TextInput style = {{
                    alignSelf: 'center',
                    fontSize: 20,
                    color: textColour
                }} multiline placeholder = 'Share your thoughts...'/>
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

    },
    
    
});