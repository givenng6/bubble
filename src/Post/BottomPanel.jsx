import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function BottomPanel(){

    const iconSize = 20;
    const [isReacted, setIsReacted] = useState(false);
    const [reactIconName, setReactIconName] = useState('hearto');
    const [reactIconColor, setReactIconColor] = useState('gray');
    const [numReaction, setNumReaction] = useState(99);

    const onReact = ()=>{
        if(isReacted){
            setReactIconColor('gray');
            setReactIconName('hearto');
            setNumReaction(numReaction - 1);
        }else{
            setReactIconColor('tomato');
            setReactIconName('heart');
            setNumReaction(numReaction + 1);
        }
        setIsReacted(!isReacted);
    }

    return(
        <View style = {styles.Main}>
            <TouchableOpacity>
                <TouchableOpacity style = {styles.Items} onPress={onReact}>
                <AntDesign name={reactIconName} size={iconSize} color={reactIconColor} />
                <Text style = {styles.Like}>{numReaction < 100 ? numReaction : '99+'}</Text>
                </TouchableOpacity>
                
            </TouchableOpacity>
            <TouchableOpacity style = {styles.Items}>
                <MaterialCommunityIcons name="comment-text-multiple-outline" size={iconSize} color="gray" />
                <Text style = {styles.Words}>Contribute</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.Items}>
                <Octicons name="share" size={iconSize} color="gray" />
                <Text style = {styles.Words}>Distribute</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.Items}>
                <Feather name="more-horizontal" size={iconSize} color="gray" />
                <Text style = {styles.Words}>More</Text>
            </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        //borderBottomWidth: 1,
        //borderTopWidth: 1,
        padding: 2,
        borderColor: 'gray'
    },
    Items:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    Words:{
        fontWeight: '500',
        fontSize: 13,
        color: 'gray'
    },
    Like:{
        fontWeight: 'bold',
        fontSize: 13,
        color: '#0FBFBF'
    }
});







