import React, { useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
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
                <TouchableOpacity style = {styles.Container} onPress={onChange}>
                <AntDesign name="picture" size={30} color="#0FBFBF" />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.Container}>
                <MaterialIcons name="layers-clear" size={30} color="#0FBFBF" />
                </TouchableOpacity>

                <ScrollView horizontal={true}>
                <View style = {styles.CompoHolder}>

                <TouchableOpacity style = {styles.Container} onPress={onChange}>
                <StyleComponent colour = '#ff80ed'/>
                </TouchableOpacity>
                
                <StyleComponent colour = '#ff7373'/>

                <StyleComponent colour = '#ff0000'/>
                <StyleComponent colour = '#990000'/>

                <StyleComponent colour = '#ffd700'/>
                <StyleComponent colour = '#daa520'/>

                <StyleComponent colour = '#0000ff'/>
                <StyleComponent colour = '#088da5'/>
                <StyleComponent colour = '#6897bb'/>
                <StyleComponent colour = '#00ffff'/>

                <StyleComponent colour = '#065535'/>
                <StyleComponent colour = '#008000'/>
                <StyleComponent colour = '#00ff7f'/>
                <StyleComponent colour = '#d3ffce'/>

                <StyleComponent colour = '#666666'/>
                <StyleComponent colour = '#333333'/>
                <StyleComponent colour = '#000000'/>
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
    }
    
});