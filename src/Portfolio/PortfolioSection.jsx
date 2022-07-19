import React, { useState } from "react";
import "./style.css";
import item from "./assets/camera.svg";
import img1 from "./assets/p-img1.png";
import PortfolioCard from "./Portfolio card/PortfolioCard";
import PButton from "./PButton";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const PortfolioSection = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className="portfolio-section">
      <div className="portfolio-main">
        <div className="heading-container">
          <h2 className="p-heading">Portfolio</h2>
        </div>
        <div className="p-img">
          <img src={item} alt="" />
        </div>
        <div className="p-menu">
          <PButton
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />
        </div>
        <div className="portfolio-content">
          <PortfolioCard items={menuItems} />
        </div>
        <button className="portfolio-btn">See all</button>
      </div>
    </div>
  );
};

export default PortfolioSection;
