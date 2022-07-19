import React from "react";
import "./style.css";
import item from "./assets/camera.svg";
import img1 from "./assets/p-img1.png";
import PortfolioCard from "./Portfolio card/PortfolioCard";
import items from "../Sources/data";

const PortfolioSection = () => {
  const ReactItem = items.filter((item) => item.category === "React js");
  const MERNItem = items.filter((item) => item.category === "MERN");
  const ReactNativeItem = items.filter(
    (item) => item.category === "React Native"
  );

  return (
    <div className="portfolio-section">
      <div className="portfolio-main">
        <div className="heading-container">
          <h2 className="p-heading">Portfolio</h2>
        </div>
        <div className="p-img">
          <img src={item} alt="" />
        </div>
        <div className="portfolio-content">
          <div className="p-title-container">
            <h3 className="p-title">React Js</h3>
          </div>
          <div className="p-content">
            <PortfolioCard items={ReactItem} />
          </div>
        </div>
        <div className="portfolio-content">
          <div className="p-title-container">
            <h3 className="p-title">React Native</h3>
          </div>

          <div className="p-content">
            <PortfolioCard items={ReactNativeItem} />
          </div>
        </div>
        <div className="portfolio-content">
          <div className="p-title-container">
            <h3 className="p-title">MERN</h3>
          </div>

          <div className="p-content">
            <PortfolioCard items={MERNItem} />
          </div>
        </div>
        <button className="portfolio-btn">See all</button>
      </div>
    </div>
  );
};

export default PortfolioSection;
