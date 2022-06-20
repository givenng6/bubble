import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function BottomPanel(){

    // <AntDesign name="hearto" size={24} color="black" />

    return(
        <View style = {styles.Main}>
            <TouchableOpacity>
                <TouchableOpacity>
                <AntDesign name="hearto" size={27} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {styles.Like}>99+</Text>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.Items}>
                <MaterialCommunityIcons name="comment-text-multiple-outline" size={27} color="gray" />
                <Text style = {styles.Words}>Contribute</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.Items}>
                <Feather name="more-horizontal" size={27} color="gray" />
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
        borderBottomWidth: 1,
        borderTopWidth: 1,
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
        fontSize: 17,
        color: 'gray'
    },
    Like:{
        fontWeight: 'bold',
        fontSize: 17,
        color: '#0FBFBF'
    }
});







