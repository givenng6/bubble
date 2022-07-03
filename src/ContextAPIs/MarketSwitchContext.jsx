import React from "react";
import { createContext, useState } from "react";

export const MarketSwitchContext = createContext();

function MarketSwitchContextProvider(props){

    // must get the init market value from the database...
    const [onMarket, setOnMarket] = useState(false);

    return(
        <MarketSwitchContext.Provider value={{onMarket, setOnMarket}}>
            {props.children}
        </MarketSwitchContext.Provider>
    );
}

export default MarketSwitchContextProvider;

