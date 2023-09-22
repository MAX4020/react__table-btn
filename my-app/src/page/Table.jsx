import { NavLink, useLocation } from "react-router-dom";
import "../style/Table.css"


const Table = () => {
  const location = useLocation()
  console.log(location)
  return ( 
    <>
      <div className="container">
        <table className="table">
          <tr>
            <th className="table__th"></th>
            <th className="table__th"></th>
            <th className="table__th"></th>
            <th className="table__th"></th>
            <th className="table__th"></th>
            <th className="table__th"></th>
            <th className="table__th"></th>
            <th className="table__th"></th>
          </tr>
        </table>
        <NavLink className='nav' to='/'><button className="btn__back">BACK TO MAIN</button></NavLink>
      </div>
    </>
   );
}
 
export default Table;