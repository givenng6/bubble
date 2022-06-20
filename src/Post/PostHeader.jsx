import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function PostHeader(){

    return(
        <TouchableOpacity style = {styles.Main}>
             <TouchableOpacity style = {styles.Profile}>
                    <Text style = {styles.Initial}>G</Text>
            </TouchableOpacity>
            <View style = {styles.Details}>
                <Text style = {styles.Name}>Given Mathebula</Text>
                <Text style = {styles.Time}>16:00 - 20/06/2020</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: 'blue',
        height: 70,
        width: '97%',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'gray'
    },
    Profile:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#51E5C1',
        width: 50,
        height: 50,
        borderRadius: 30,
        marginLeft: 11,
        //borderColor: '#51E5C1'
    },
    Initial:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    Details:{
        display: 'flex',
        flexDirection: 'column'
    },
    Name:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'gray',
        marginLeft: 12
    },
    Time:{
        fontWeight: 'bold',
        fontSize: 11,
        color: 'gray',
        marginLeft: 12
    }

});















