import { useContext, useState, useRef, useEffect } from "react";
import { MainContextValues } from "../context/MainContext";
import Btn from "../comp/Btn";
import "../style/Main.css"

const Main = () => {
    const {} = useContext(MainContextValues)
    return ( 
        <>
        <div className="container">
            <Btn/>
        </div> 
        </>
     );
}
 
export default Main;