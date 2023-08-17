import "./Recommended.css"
import {Button} from "../components/Button"

const Recomendition = ({handleClick}) => {
  return (
    <>
    <div>
      <h2 className="recommended-title">Recomendition</h2>
      <div className="recommended-flex">
      <Button onClickHandler = {handleClick} value = "" title = "All Production"/>
      <Button onClickHandler={handleClick} value="Nike" title="Nike" />
      <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
      <Button onClickHandler={handleClick} value="Puma" title="Puma" />
      <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
    </>
  )
}

export default Recomendition