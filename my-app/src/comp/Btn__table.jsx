import "./Btn__table.css"

const Btn__table = ({table__id}) => {
  return ( 
    <>
    <div className="btn__table__flex">
      <button className="btn__table">TABLE {table__id}</button>
    </div>
    </>
   );
}
 
export default Btn__table