import React from "react";
import { useState, createContext } from "react";

export const PostContext = createContext();

function PostContextProvider(props){

    // Variables will be available to the header button and post screen...
    const [postData, setPostData] = useState('');

    return(
        <PostContext.Provider value={{postData, setPostData}}>
            {props.children}
        </PostContext.Provider>
    );

}

export default PostContextProvider;





