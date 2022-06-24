import React, { useState } from "react";
import { Text, View,TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";

export default function MoreModal(props){

    const onClose = ()=>{
        props.setVisible(false);
    }

    return(

       <Modal visible = {props.visible} transparent={true} animationType= 'slide'>
            <View style = {styles.Main}>
                <View style = {styles.Content}>
                    <Text>Report</Text>
                    <TouchableWithoutFeedback onPress={onClose}>
                        <Text>Close</Text>
                    </TouchableWithoutFeedback>
                </View>
                
            </View>
       </Modal>
    );
}


const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column-reverse',
        width: '100%',
        height: 200,
        backgroundColor: '#00000099',
        flex: 1,
        alignSelf: 'center',

    },
    Content:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bottom: 20,
        height: 200,
        backgroundColor: 'white',
        alignSelf: 'center',
        width: '100%'
    }
});





