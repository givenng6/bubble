import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OptionsCard from "./OptionsCard";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MarketSwitch from "./MarketSwitch";

export default function PopBubble(){

    const iconSize = 90;
    const iconColor = 'yellow';
    const userIcon = <Feather name="user" size={iconSize} color={iconColor} />
    const marketIcon = <MaterialCommunityIcons name="store-marker-outline" size={iconSize} color={iconColor} />

    return(
       
            <View style = {styles.Main}>
                <View style = {styles.Window}>
                <Text style = {styles.Slogan}>Ready to meet the ideal partner? Are you available and ready to pop the bubble?</Text>
                </View>

                <View style = {styles.List}>
                <OptionsCard icon = {userIcon} title = 'Profile'/>
                <OptionsCard icon = {marketIcon} title = 'Market'/>
                </View>
                
               
            </View>
       
    );
}

const styles = StyleSheet.create({
   Main:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    Slogan:{
        fontWeight: 'bold',
        fontSize: 27,
        color: 'white',
        padding: 15

    },
    Window:{
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 12,
        margin: 15
    },
    List:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
});


