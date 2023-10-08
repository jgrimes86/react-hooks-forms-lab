import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterSearch, setFilterSearch] = useState("")

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
      <ItemForm addNewItem={addNewItem} />
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
