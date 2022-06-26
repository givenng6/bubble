import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../assets/bc.jpeg'


export default function Login({navigation}){

   
    return(
       <View style = {styles.Main}>
            <Text style = {styles.Title}>Create Account</Text>
            <Text style = {styles.SubTitle}>with</Text>
            <Image source={logo} style = {styles.Logo}/>

           
            <View style = {styles.InputHolder}>
                <FontAwesome5 name="user" size={24} color="gray" />
                <TextInput placeholder="Name" style= {{marginLeft: 10, fontWeight: '300'}}/>
            </View>

            <View style = {styles.InputHolder}>
                <MaterialIcons name="mail-outline" size={24} color="gray" />
                <TextInput placeholder="Email" style= {{marginLeft: 10, fontWeight: '300'}}/>
            </View>

            <View style = {styles.InputHolder}>
                <MaterialIcons name="lock-outline" size={24} color="gray" />
                <TextInput placeholder="Password" style= {{paddingLeft: 10, fontWeight: '300'}}/>
            </View>

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
    },
    InputHolder:{
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        width: '80%',
        padding: 8,
        marginTop: 12,
        borderRadius: 15,
        borderColor: 'gray'
       
    },
   

});









