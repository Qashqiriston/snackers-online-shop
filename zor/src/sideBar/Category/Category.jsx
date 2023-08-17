import RadioInput from "../../components/RadioInput"
import "./Category.css"

function Catigory ({handleChange}) {

  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>

      <label className="sidebar-label-container">
       <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
      </label>

      <RadioInput
      handleChange={handleChange}
      value = "sneakers"
      title= "Sneakers"
      name= 'test'
      />
      <RadioInput
      handleChange={handleChange}
      value = "sandals"
      title= "Sandals"
      name = "test"
      />
      <RadioInput
      handleChange={handleChange}
      value = "heels"
      title="Hells"
      name="test" />
      </div>
    </div>
  )
}

export default Catigory