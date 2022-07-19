import React, { useState } from "react";
import "./style.css";
import bg from "./assets/bg.png";
import TCard from "./T-card/TCard";
// import { people } from "../data";

const TBgIcon = () => {
  const [id, setId] = useState(people[0].id);
  const [review, setReview] = useState(people[0].review);
  const [img, setImg] = useState(people[0].img);
  const [name, setName] = useState(people[0].name);
  const [profession, setProfession] = useState(people[0].profession);
  const NextButton = () => {
    if (id === people.length) {
      setId(1);
      setReview(people[0].review);
      setImg(people[0].img);
      setName(people[0].name);
      setProfession(people[0].profession);
    } else {
      setId(id + 1);
      setReview(people[id].review);
      setImg(people[id].img);
      setName(people[id].name);
      setProfession(people[id].profession);
    }
  };
  const previousButton = () => {
    if (id === 1) {
      setId(people.length);
      setReview(people[people.length - 1].review);
      setImg(people[people.length - 1].img);
      setName(people[people.length - 1].name);
      setProfession(people[people.length - 1].profession);
    } else {
      setId(id - 1);
      setReview(people[id - 2].review);
      setImg(people[id - 2].img);
      setName(people[id - 2].name);
      setProfession(people[id - 2].profession);
    }
  };

  return (
    <div className="t-bg-container">
      <img src={bg} alt="" className="card-background" />
      <TCard
        id={id}
        review={review}
        img={img}
        name={name}
        profession={profession}
        nextBTN={NextButton}
        preBTN={previousButton}
      />
    </div>
  );
};

export default TBgIcon;

let people = [
  {
    id: 1,
    review:
      "This is the first paragraph. I would like to thank myself for all the dedication which got me here. Thank you everybody that you are listening ",
    img: "./images/item-1.jpeg",
    name: "john smith1",
    profession: " Founder of Awesomeux Technology",
  },
  {
    id: 2,
    review:
      "This is the second paragraph. I would like to thank myself for all the dedication which got me here. Thank you everybody that you are listening ",
    img: "./images/item-2.jpeg",
    name: "john smith2",
    profession: " .            FaceBook Developer",
  },
  {
    id: 3,
    review:
      "This is the third paragraph. I would like to thank myself for all the dedication which got me here. Thank you everybody that you are listening ",
    img: "./images/item-3.jpeg",
    name: "john smith3",
    profession: " Amazon Web services Developer",
  },
  {
    id: 4,
    review:
      "This is the fourth paragraph. I would like to thank myself for all the dedication which got me here. Thank you everybody that you are listening ",
    img: "./images/item-4.jpeg",
    name: "john smith4",
    profession: " Fuckedup developer",
  },
  {
    id: 5,
    review:
      "This is the fifth paragraph. I would like to thank myself for all the dedication which got me here. Thank you everybody that you are listening ",
    img: "./images/item-5.jpeg",
    name: "john smith5",
    profession: " xyz Developer",
  },
  {
    id: 6,
    review:
      "This is the sixth paragraph. I would like to thank myself for all the dedication which got me here. Thank you everybody that you are listening ",
    img: "./images/item-6.jpeg",
    name: "john smith6",
    profession: " Netflix developer",
  },
  {
    id: 7,
    review:
      "This is the sevent paragraph. I would like to thank myself for all the dedication which got me here. Thank you everybody that you are listening ",
    img: "./images/item-7.jpeg",
    name: "john smith7",
    profession: " Good developer",
  },
];
