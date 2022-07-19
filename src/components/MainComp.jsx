import React, { useState } from "react";
import Component from "./Component";

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
const MainComp = () => {
  const [id, setId] = useState(data[0].id);
  const [title, setTitle] = useState(data[0].title);
  const [paragraph, setParagraph] = useState(data[0].paragraph);
  // const [previous, setPrevious] = useState(false);
  // const [next, setNext] = useState(false);

  const NextButton = () => {
    if (id === data.length) {
      setId(1);
      setTitle(data[0].title);
      setParagraph(data[0].paragraph);
    } else {
      setId(id + 1);
      setTitle(data[id].title);
      setParagraph(data[id].paragraph);
    }
  };
  const PreviousButton = () => {
    if (id === 1) {
      setId(data.length);
      setTitle(data[data.length - 1].title);
      setParagraph(data[data.length - 1].paragraph);
    } else {
      setId(id - 1);
      setTitle(data[id - 2].title);
      setParagraph(data[id - 2].paragraph);
    }
  };
  return (
    <div>
      <Component
        id={id}
        title={title}
        paragraph={paragraph}
        NextBTN={NextButton}
        PreBTN={PreviousButton}
      />
    </div>
  );
};

export default MainComp;
