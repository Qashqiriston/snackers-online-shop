import { useState } from "react"
import SiderBar from "./sideBar/Sidebar"
import Navigation from "./navigation/navigation"
import Recomendition from "./Recommended/Recommended"
import Products from "./Products/Products"
import Card from "./components/Card"
import data from "./db/data"

function App(){
  const [selectedCategory, setSelectedCategory] = useState(null);
//---------------- INPUT FILTER-----------
  const [query, setQuery] = useState("")

  const handleInputChange =(e)=>{
    setQuery(e.target.value)
  }

  const filteredItem = data.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

  //-----------------RADIO FILTER----------
  
    const handleChange = (e) =>{
      setSelectedCategory(e.target.value)
    }
4
  //---------------BUTTON FILTER---------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }
  function filteredData(data, selected, query){
    let filteredProducts = data;
   
    if(query){
      filteredProducts = filteredItem
    }
//  xatolik newPrice buyichami++++++++
// newPrice da xatolik newPrise deb yozganman keyingisi company ni compony deb yozganman
    if(selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrise})=>(
      <Card
      key={Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrise}
      />
    ))
  }

  const result = filteredData(data, selectedCategory, query)



  return (
    <div>
      <Navigation query = {query} handleInputChange = {handleInputChange} />
      <Recomendition handleClick={handleClick}/>
      <SiderBar handleChange = {handleChange} />
      <Products result={result} />
    </div>
  )
}

export default App