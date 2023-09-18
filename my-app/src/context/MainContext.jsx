import { createContext } from "react";
import { useState, useRef } from "react";

export const MainContextValues = createContext()
export const MainContextProvider = ({children}) => {
    return ( 
        <>
        <MainContextValues.Provider value={{}}>
            {children}
        </MainContextValues.Provider>
        </>
     );
}