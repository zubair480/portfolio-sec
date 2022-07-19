import React from "react";
import "./style.css";
import image1 from "./assets/1.png";
import image2 from "./assets/2.png";
import image3 from "./assets/3.png";
import image4 from "./assets/4.png";
import image5 from "./assets/5.png";
import image6 from "./assets/6.png";
import image7 from "./assets/7.png";
import image8 from "./assets/8.png";
import image9 from "./assets/9.png";
import image10 from "./assets/10.png";
import image11 from "./assets/11.png";
import image12 from "./assets/12.png";
import image13 from "./assets/13.png";
const BgSvg = () => {
  window.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".obj").forEach((obj) => {
      let speed = obj.getAttribute("data-speed");
      let x = (window.innerWidth - e.pageX * speed) / 100;
      let y = (window.innerHeight - e.pageY * speed) / 100;
      obj.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  return (
    <div className="bg-svg">
      <div className="img">
        <img src={image1} alt="image" data-speed="-1" className="obj" />
      </div>
      <div className="img">
        <img src={image2} alt="image" data-speed="2" className="obj" />
      </div>
      <div className="img">
        <img src={image3} alt="image" data-speed="-2" className="obj" />
      </div>
      <div className="img">
        <img src={image4} alt="image" data-speed="3" className="obj" />
      </div>
      <div className="img">
        <img src={image5} alt="image" data-speed="-3" className="obj" />
      </div>
      <div className="img">
        <img src={image6} alt="image" data-speed="1" className="obj" />
      </div>
      <div className="img">
        <img src={image7} alt="image" data-speed="-4" className="obj" />
      </div>
      <div className="img">
        <img src={image8} alt="image" data-speed="2" className="obj" />
      </div>
      <div className="img">
        <img src={image9} alt="image" data-speed="2" className="obj" />
      </div>
      <div className="img">
        <img src={image10} alt="image" data-speed="2" className="obj" />
      </div>
      <div className="img">
        <img src={image11} alt="image" data-speed="2" className="obj" />
      </div>
      <div className="img">
        <img src={image12} alt="image" data-speed="2" className="obj" />
      </div>
      <div className="img">
        <img src={image13} alt="image" data-speed="2" className="obj" />
      </div>
    </div>
  );
};

export default BgSvg;
