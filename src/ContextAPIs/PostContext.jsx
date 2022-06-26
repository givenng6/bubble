import React from "react";
import { useState, createContext } from "react";

export const PostContext = createContext();

function PostContextProvider(props){

    // Variables will be available to the header button and post screen...
    const [postData, setPostData] = useState('');
    const [metaData, setMetaData] = useState('');
    const [navigation, setNavigation] = useState(null);

    return(
        <PostContext.Provider value={{postData, setPostData, metaData, setMetaData, navigation, setNavigation}}>
            {props.children}
        </PostContext.Provider>
    );

}

export default PostContextProvider;





