import React, { useState} from 'react';
import "../../style/home.css"

const CustomCategories = ({ initialCategories, onCategoryChange }) => {
  const [categories, setCategories] = useState(initialCategories || ['Select Category','All', 'Rakhi', 'Handkerchief', 'Sweets']);


  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value); 
  };

  return (
    <div  >
      <select className='select-menu' onChange={handleCategoryChange}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomCategories;