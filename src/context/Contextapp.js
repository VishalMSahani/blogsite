import React from "react";
import { useState } from "react";
import {baseUrl} from '../baseUrl'
import { createContext } from "react";

export const AppContext = createContext();


function AppContextProvider ({children}) {
    // State for the app context
    const [isLoading, setIsLoading] = useState(false);
    const [page , setPage] = useState(1);
    const [post, setPost] = useState([ ]);
    const [totalPages , setTotalPages] = useState(null);

    async function fetchData(page=1){
        setIsLoading(true);
        try{
            let response = await fetch(`${baseUrl}?page=${page}`);
            let data  = await response.json() ;
           
            setTotalPages(data?.totalPages);
            setPost(data?.posts);
            setPage(data?.page);
            setIsLoading(false);
    

        }
        catch(error){
            alert("Error in fetching data please try again");
        }

    }


    function pagehandler(page){
        setPage(page)
        fetchData(page)
    }

    const value = {
        isLoading, setIsLoading, post, setPost, totalPages, setTotalPages, page, setPage,
        fetchData, pagehandler,

    };
    return  <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export default AppContextProvider;