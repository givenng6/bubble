import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BottomPanel from "./BottomPanel";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";


export default function Post(){
    return(
        <View>
            <PostHeader/>
            <PostBody />
            <BottomPanel />
        </View>
    );
}
