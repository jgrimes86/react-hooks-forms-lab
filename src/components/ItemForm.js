import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleItemForm, handleSubmit, textInput}) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemForm} value={textInput}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemForm}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
