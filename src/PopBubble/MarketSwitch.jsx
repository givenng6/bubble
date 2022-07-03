import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";

export default function MarketSwitch(){

    const [onMarket, setOnMarket] = useState(false);

    const onChange = ()=>{
        setOnMarket(!onMarket);
    }

    return(
        <Switch 
        trackColor={{ false: "#767577", true: "#0FBFBF" }}
        thumbColor={onMarket ? "#F6ADC6" : "#f4f3f4"}
        value = {onMarket}
        onValueChange = {onChange}
        style = {styles.Main}
        />
    );
    
}


const styles = StyleSheet.create({
    Main:{
        margin: 5,
    }
});
