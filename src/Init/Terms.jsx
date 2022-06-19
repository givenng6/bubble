import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Button } from 'react-native';

export default function Terms({navigation}){

    const onAgree = ()=>{
        navigation.navigate('UniPicker');
    }

    return(
        <View style = {styles.Home}>
            <View style = {styles.Heading}>
                <Text style = {styles.TextStyle}>Bubble</Text>
            </View>
            <View style = {styles.Body}>
                <ScrollView>
                <Text style= {styles.Title}>Our Terms of Use</Text>
                <Text style = {styles.TermsStyle}>Last updated: March 13, 2017
                        (McDonald’s address update: January 18, 2019; non-substantive update for accessibility: May 15, 2019, June 20, 2022: non-material update for privacy-related clarifications)

                        Important: Please carefully read and understand these terms and conditions (“terms”). They contain an arbitration agreement, jury and class action waivers, limitations on McDonald’s liability and other provisions that affect your legal rights.

                        By installing, accessing or using any websites, mobile apps, email newsletters and subscriptions, and other digital properties on which these terms are posted or referenced (together, “online services”), you are entering into a binding agreement with McDonald’s USA, LLC ( “McDonald’s”, “we” or “us”), which controls and operates the online services from its headquarters at 110 North Carpenter Street, Chicago, Illinois 60607.

                        Please also review the McDonald’s Privacy Statement, which describes how we collect, use and share information. By accepting these terms, you also understand and agree these terms will govern any disputes arising out of or related to McDonald’s Privacy Statement.

                        By accepting these terms, you also understand and consent to McDonald’s Privacy Statement and California Privacy Notice, which is incorporated into, and part of, this agreement. Our Privacy Statement describes how we collect, use and share information.

                        By accepting these terms, you understand and agree that, as stated in Section 9, you are waiving your right to resolve any dispute through other processes that could be available to you, such as court actions or administrative proceedings. It also means that you are waiving your rights to a trial by jury or to combine your dispute with others in a class action.

                        The online services are not intended to be used by, or targeted to, anyone under the age of 13 years old. You must be at least 13 years old to use the online services.

                        If you or your parent or guardian do not agree to these terms, then you must immediately stop using the online services and request that McDonald’s close any online services account that you have created. You can request account deletion by visiting the CCPA Rights Center and making a deletion request.
                        </Text>
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
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1
    },
    Heading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 40,
        flex: 0.5
    },
    Body:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
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
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
        //flexDirection: 'row-reverse',
    }
});