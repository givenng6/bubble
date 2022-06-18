import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UniPicker(){
    return(
        <View style = {styles.Main}>
            <View style = {styles.Header}>
                <Text style = {styles.Title}>Select Your Institution</Text>
            </View>
            <View style = {styles.List}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'blue',
        justifyContent: 'center',
        flex: 1
    },
    Header:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'yellow',
        justifyContent: 'center',
        paddingTop: 16,
        flex: 0.7
    },
    List:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'pink',
        justifyContent: 'center',
        flex: 6
    },
    Title:{
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    }
});




