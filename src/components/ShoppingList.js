import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterSearch, setFilterSearch] = useState("")
  const [formObject, setFormObject] = useState({
    name: "",
    category: "Produce"
  })

  function handleItemForm() {
    setFormObject(...formObject)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: formObject.name,
      category: formObject.category,
    }
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFilterSearch(event) {
    setFilterSearch(event.target.value);
    let input = event.target.value;
    const sanitizedInput = input[0].toUpperCase() + input.slice(1).toLowerCase();
    if (items.find((item) => {return sanitizedInput === item.category})) {
      setSelectedCategory(sanitizedInput)
    } else {}
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm handleItemForm={handleItemForm} handleSubmit={handleSubmit} textInput={formObject.name}/>
      <Filter onCategoryChange={handleCategoryChange} filterSearch={filterSearch} onSearchChange={handleFilterSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
