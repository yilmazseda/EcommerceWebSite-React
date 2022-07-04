import React from "react";
import { Images } from "../utilies/images";
const Recomended = () => {
  const data = [
    {
      image: Images.recommend1,
      text: "The best Anti Aging Cream with cheap price",
    },
    { image: Images.recommend2, text: "Best budget Headphone for RPG Gamers" },
    {
      image: Images.recommend3,
      text: "Have a much project? You must have this Savage Laptop",
    },
    {
      image: Images.recommend4,
      text: "Bored work from home. You can make juice for your health",
    },
  ];

  return (
    <div className="recommend-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Recommended for You</h2>
        </div>
        <div className="categories">
          {data.map(({ image, text }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="Category" />
                <h4>{text}</h4>
              </div>
            );
          })}
        </div>
        <button>Show All</button>
      </div>
    </div>
  );
};

export default Recomended;
