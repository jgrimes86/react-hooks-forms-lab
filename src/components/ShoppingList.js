import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterSearch, setFilterSearch] = useState("Search...")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFilterSearch(event) {
    setFilterSearch(event.target.value)
    // if (items.find((item) => {
    //   if (item.category.toLowerCase() === event.target.value.toLowerCase()) {return true}
    // })) {
    //   setItems(event.target.value)
    // } else {setItems(itemData)}
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
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
