import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const formStartValues = {
  name: "",
  category: "Produce"
}

function ItemForm({addNewItem}) {
  const [formObject, setFormObject] = useState(formStartValues)

  function handleItemForm(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormObject({
      ...formObject,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      ...formObject
    }
    addNewItem(newItem)
    setFormObject(formStartValues)
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemForm} value={formObject.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemForm} value={formObject.value} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
