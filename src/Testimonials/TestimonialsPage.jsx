import React from "react";
import "./style.css";
import item from "./assets/suitcase.png";
import BgSvg from "./BgSVG/BgSvg";
import TBgIcon from "./T bg icons/TBgIcon";

const TestimonialsPage = () => {
  return (
    <div className="t-section">
      <div className="t-main">
        <div className="t-heading-container">
          <h2 className="t-heading">Testimonials</h2>
        </div>
        <div className="t-b-img-container">
          <img src={item} alt="" className="t-b-img" />
        </div>
        <div className="t-content-container">
          <BgSvg />
          <div className="t-bg-icons">
            <TBgIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
