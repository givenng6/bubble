import React, { useContext} from "react";
import { Switch, StyleSheet } from "react-native";
import { MarketSwitchContext } from "../ContextAPIs/MarketSwitchContext";

export default function MarketSwitch(){

    // getting the values from the switch context API...
    const {onMarket, setOnMarket} = useContext(MarketSwitchContext);

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
