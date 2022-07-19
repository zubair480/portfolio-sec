import React from "react";

const PButton = ({ categories, filterItems, activeCategory }) => {
  return (
    <div>
      <ul className="p-menu-ul">
        {categories.map((category, index) => {
          return (
            <li
              className={`${
                activeCategory === category ? "p-li-item active" : "p-li-item"
              }`}
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PButton;
