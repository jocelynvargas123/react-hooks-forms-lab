import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setNameSubmit] = useState("");
  const [category, setFormSubmit] = useState("Produce");

  function nameChange(event){
    setNameSubmit(event.target.value);
  }
  function formChange(event){
    setFormSubmit(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name: 
        <input type="text" name="name" value={name} onChange={nameChange}/>
      </label>

      <label>
        Category: 
        <select name="category" value={category} onChange={formChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
