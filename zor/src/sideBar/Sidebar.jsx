import Catigory from "./Category/Category";
import Color from "./Color/Color";
import Price from "./Price/Price";

function Sidebar({handleChange}){
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1> 🛒</h1>
        </div>
        <Catigory handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
      </section>
    </>
  )
}

export default Sidebar