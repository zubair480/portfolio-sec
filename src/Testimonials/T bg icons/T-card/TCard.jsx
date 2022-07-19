import React from "react";
import "./style.css";
import blurImg from "./assets/blur.png";
import doubleQuote from "./assets/“.svg";
import clientImg from "./assets/client.jpeg";
const TCard = ({ id, review, img, name, profession, nextBTN, preBTN }) => {
  return (
    <div className="I-card-container" key={id}>
      <div className="I-card-blur">
        <img src={blurImg} alt="" className="t-card-img" />
        <img src={doubleQuote} alt="" className="quotes" />
        <p className="card-p">{review}</p>
        <div className="card-img-container">
          <img src={img} alt="" className="card-img" />
        </div>
        <div className="card-identity">
          <h3 className="card-identity-title">{name}</h3>
          <p className="card-identity-description">{profession}</p>
          <div className="card-arrows">
            <div className="left-arrow" onClick={preBTN}>
              <svg
                width="22"
                height="9"
                viewBox="0 0 22 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.576 4.7185L1.26562 4.71851"
                  stroke-width="1.27213"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.64493 1.43595L1.26562 4.71846L4.64494 8.00098"
                  stroke-width="1.27213"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="right-arrow" onClick={nextBTN}>
              <svg
                width="22"
                height="9"
                viewBox="0 0 22 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.576 4.7185L1.26562 4.71851"
                  stroke-width="1.27213"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.64493 1.43595L1.26562 4.71846L4.64494 8.00098"
                  stroke-width="1.27213"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCard;
