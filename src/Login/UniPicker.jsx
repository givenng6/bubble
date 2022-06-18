import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from "react-native";
import UniCard from "./UniCard";

import wits from './assets/wits.png';
import uj from './assets/uj.jpeg';
import uct from './assets/uct.png';
import up from './assets/up.jpeg';
import ufs from './assets/ufs.png';
import tut from './assets/tut.png';
import { ScrollView } from "react-native";

export default function UniPicker({navigation}){
    return(
        <ScrollView style = {styles.Scroll}>
        <View style = {styles.Main}>
            <View style = {styles.Header}>
                <Text style = {styles.Title}>Select Your Institution</Text>
            </View>
            <View style = {styles.List}>
                <UniCard name = 'WITS' logo = {wits} navigation = {navigation}/>
                <UniCard name = 'UJ' logo = {uj}/>
                <UniCard name = 'UCT' logo = {uct}/>
                <UniCard name = 'UP' logo = {up}/>
                <UniCard name = 'UFS' logo = {ufs}/>
                <UniCard name = 'TUT' logo = {tut}/>
                <UniCard name = 'WITS' logo = {wits}/>
                <UniCard name = 'UJ' logo = {uj}/>
                <UniCard name = 'UCT' logo = {uct}/>
                <UniCard name = 'UP' logo = {up}/>
                <UniCard name = 'UFS' logo = {ufs}/>
                <UniCard name = 'TUT' logo = {tut}/>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1
    },
    Header:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 35,
        flex: 0.5
    },
    List:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 6
    },
    Title:{
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 12
    },
    Scroll:{
        marginTop: 45
    }
});




