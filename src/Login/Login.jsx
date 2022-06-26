import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from '../assets/bc.jpeg'


export default function Login({navigation}){

   
    return(
       <View style = {styles.Main}>
            <Text style = {styles.Title}>Create Account</Text>
            <Text style = {styles.SubTitle}>with</Text>
            <Image source={logo} style = {styles.Logo}/>
       </View>

       
    );
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flex: 1 ,
        alignItems: 'center',
        //justifyContent: 'center'
    },
    Logo:{
        width: 139,
        height: 35,
    },
    Title:{
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
        color: '#0FBFBF'
    },
    SubTitle:{
        fontWeight: 'bold',
        fontSize: 15,
        color: '#0FBFBF'
    }

});









