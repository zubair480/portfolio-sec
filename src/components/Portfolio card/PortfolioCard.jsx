import React from "react";
import "./style.css";

const PortfolioCard = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, title, img } = item;
        return (
          <div className="ui-card" key={id}>
            <img src={img} alt={title} className="p-card-img" />
            <div className="ui-card-description">
              <h3 className="ui-card-title">{title}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PortfolioCard;
