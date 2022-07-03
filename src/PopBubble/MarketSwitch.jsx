import React, { useState } from "react";
import { Switch } from "react-native";

export default function MarketSwitch(){

    const [onMarket, setOnMarket] = useState(false);

    const onChange = ()=>{
        setOnMarket(!onMarket);
    }

    return(
        <Switch 
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={onMarket ? "#f5dd4b" : "#f4f3f4"}
        value = {onMarket}
        onValueChange = {onChange}
        />
    );
    
}

