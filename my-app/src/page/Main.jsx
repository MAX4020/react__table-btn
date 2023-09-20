import { useContext, useState, useRef, useEffect } from "react";
import { MainContextValues } from "../context/MainContext";
import Btn from "../comp/Btn";
import "../style/Main.css"

const Main = () => {
    const {} = useContext(MainContextValues)
    const [state,setState] = useState(new Array(100).fill(null))
    return ( 
        <>
        <div className="container">
            {state.map((_,index)=>(<Btn id={index+1}/>))}
        </div> 
        </>
     );
}
 
export default Main;