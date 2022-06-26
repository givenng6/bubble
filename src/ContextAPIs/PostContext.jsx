import React from "react";
import { useState, createContext } from "react";

export const PostContext = createContext();

function PostContextProvider(props){

    const [postData, setPostData] = useState('');


    return(
        <PostContext.Provider value={{postData, setPostData}}>
            {props.children}
        </PostContext.Provider>
    );

}

export default PostContextProvider;





