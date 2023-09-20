import "./Btn.css"
import { useState } from "react";
import Modal from "./Modal";
import Btn__table from "./Btn__table";

const Btn = ({id,table__id}) => {
    const [modalActive,setModalActive] = useState(false)
    return ( 
        <>
            <button className="btn" onClick={()=>setModalActive(true)}>{id}</button>
            <Modal active={modalActive} setActive={setModalActive}>
                {new Array(10).fill(null).map((_,index)=>(<Btn__table table__id={index+1}>TABLE {table__id}</Btn__table>))}
            </Modal>
        </>
     );
}
 
export default Btn;