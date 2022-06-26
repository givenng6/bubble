import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../assets/bc.jpeg'
import { TouchableOpacity } from "react-native";


export default function Login({navigation}){

   
    return(
       <View style = {styles.Main}>
            <View syle = {styles.Upper}>
                <Text style = {styles.Title}>Create Account</Text>
                <Text style = {styles.SubTitle}>with</Text>
                <Image source={logo} style = {styles.Logo}/>
                
            </View>

            <View style = {styles.Lower}>
                <View style = {styles.InputHolder}>
                    <FontAwesome5 name="user" size={24} color="#0FBFBF" />
                    <TextInput placeholder="Name" style= {{marginLeft: 10, fontWeight: '300'}}/>
                </View>

                <View style = {styles.InputHolder}>
                    <MaterialIcons name="mail-outline" size={24} color="#0FBFBF" />
                    <TextInput placeholder="Email" style= {{marginLeft: 10, fontWeight: '300'}}/>
                </View>

                <View style = {styles.InputHolder}>
                    <MaterialIcons name="lock-outline" size={24} color="#0FBFBF" />
                    <TextInput placeholder="Password"  style= {{paddingLeft: 10, fontWeight: '300'}}/>
                </View>

                <TouchableOpacity style = {styles.On}>
                    <Text style = {styles.OnTitle}>Sign Up</Text>
                </TouchableOpacity>

                <Text style = {styles.Text}>Already have an account?</Text>

                <TouchableOpacity style = {styles.Off}>
                    <Text style = {styles.OffTitle}>Log In</Text>
                </TouchableOpacity>
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
    },
    Logo:{
        alignSelf: 'center',
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
        alignSelf: 'center',
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
        borderColor: '#0FBFBF'
       
    },
    On:{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        backgroundColor: '#0FBFBF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        marginTop: 20,
        borderRadius: 9
    },
    OnTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    Off:{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        marginTop: 10,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#0FBFBF'
    },
    OffTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#0FBFBF'
    },
    Text:{
        marginTop: 10,
        fontWeight: '200',
        //fontSize: 16,
        color: 'black'
    },
    Upper:{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flex: 1.5 ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Lower:{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flex: 1 ,
        alignItems: 'center',
        justifyContent: 'center'
    }

   

});

