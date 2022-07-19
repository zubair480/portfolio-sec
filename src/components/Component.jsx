import React from "react";
import "./component.css";

let data = [
  {
    id: 1,
    title: "Title 1",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo autem repudiandae eius dolorum qui ullam natus minus accusantium magni?",
  },
  {
    id: 2,
    title: "Title 2",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo autem repudiandae eius dolorum qui ullam natus minus accusantium magni?",
  },
  {
    id: 3,
    title: "Title 3",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo autem repudiandae eius dolorum qui ullam natus minus accusantium magni?",
  },
  {
    id: 4,
    title: "Title 4",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo autem repudiandae eius dolorum qui ullam natus minus accusantium magni?",
  },
];

const Component = ({ id, title, paragraph, PreBTN, NextBTN }) => {
  return (
    <div>
      <h2>Heading</h2>
      <div className="card">
        <div key={id}>
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </div>
        <div className="buttons">
          <button className="previous" onClick={PreBTN}>
            Previous
          </button>
          <button className="next" onClick={NextBTN}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component;
