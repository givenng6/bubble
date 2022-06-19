import React from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import { Dimensions } from 'react-native'

export default function Notifications(){
    let ScreenHeight = Dimensions.get("window").height;
    return(
        <View style = {styles.Main}>
            <View style = {styles.Header}>
                <Text style = {styles.Title}>Notifications</Text>
            </View>
            <ScrollView>
                <View style = {{display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            flexWrap: 'wrap',
                            minHeight: ScreenHeight,
                            height: ScreenHeight,
                            justifyContent: 'center'}}>
                    <Text>Msg</Text>
                </View>
            </ScrollView>
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