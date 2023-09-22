import "./Btn__table.css"
import { NavLink } from "react-router-dom";

const Btn__table = ({table__id}) => {
  return ( 
    <>
    <div className="btn__table__flex">
      <NavLink className='nav' to={`/table?id=${table__id}`}><button className="btn__table">TABLE {table__id}</button></NavLink>
    </div>
    </>
   );
}
 
export default Btn__table