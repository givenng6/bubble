import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Button } from 'react-native';

export default function Terms({navigation}){

    const tc = "Privacy Policy Your privacy is important to us. It is Bubble's policy to respect your privacy regarding any information we may collect from you across our app, Bubble, and other sites we own and operate.We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.We don’t share any personally identifying information publicly or with third-parties, except when required to by law.Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.More InformationHopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.This policy is effective as of Jun 2022. Privacy Policy Your privacy is important to us. It is Bubble's policy to respect your privacy regarding any information we may collect from you across our app, Bubble, and other sites we own and operate.We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.We don’t share any personally identifying information publicly or with third-parties, except when required to by law.Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.More InformationHopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.This policy is effective as of Jun 2022.";

    const onAgree = ()=>{
        navigation.navigate('UniPicker');
    }

    return(
        <View style = {styles.Home}>
            <View style = {styles.Body}>
                <ScrollView>
                <Text style= {styles.Title}>Terms Of Use</Text>
                <Text style = {styles.TermsStyle}>{tc}</Text>
                </ScrollView>
            </View>
            <View style = {styles.Agree}>
                <Button title = 'Agree' onPress={onAgree}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Home: {
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
        marginTop: 50
    },
    Body:{
        display: 'flex',
        flexDirection: 'column',
        padding: 12,
        flex: 5
    },
    TextStyle: {
        fontSize: 32,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    TermsStyle: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'gray'
    },
    Title:{
        fontSize: 18,
        //alignSelf: 'center',
        fontWeight: 'bold',
        color: 'gray'
    },
    Agree:{
        display: 'flex',
        flex: 0.5,
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    }
});