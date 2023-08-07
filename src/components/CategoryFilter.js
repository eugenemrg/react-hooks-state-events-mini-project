import React, { useEffect, useState } from "react";

function CategoryFilter({categories, filterByCategory}) {

  const [selected, setSelected] = useState('')
  
  function handleClick(category) {
    setSelected(category)
    filterByCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map( category => <button key={category} className={selected === category ? 'selected' : ''} onClick={() => handleClick(category)}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
