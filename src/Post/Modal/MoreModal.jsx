import React, { useState } from "react";
import { Text, View,TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";
import ModalClickables from "./ModalClickables";

export default function MoreModal(props){

    const onClose = ()=>{
        props.setVisible(false);
    }

    return(

       <Modal visible = {props.visible} transparent={true} animationType= 'slide' onRequestClose={onClose}>
            <View style = {styles.Main}>
                <View style = {styles.Content}>
                    <ModalClickables colour = 'black' title = 'View Profile' setVisible = {props.setVisible}/>
                    <ModalClickables colour = 'tomato' title = 'Report' setVisible = {props.setVisible}/>
                    <ModalClickables colour = 'black' title = 'Close' setVisible = {props.setVisible}/>
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
        padding: 25,
        backgroundColor: 'white',
        alignSelf: 'center',
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
});





