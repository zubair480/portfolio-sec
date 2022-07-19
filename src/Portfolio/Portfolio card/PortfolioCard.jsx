import React from "react";
import "./style.css";

const PortfolioCard = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, title, img } = item;
        return (
          <div class="ui-card" key={id}>
            <img src={img} alt={title} className="p-card-img" />
            <div class="ui-card-description">
              <h3 className="ui-card-title">{title}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PortfolioCard;
