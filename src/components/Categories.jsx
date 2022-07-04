import React from "react";
import { Images } from "../utilies/images";

const Categories = () => {
  const categories = [
    {
      image: Images.category1,
      title: "Fashion",
      description: "290K Items",
    },
    {
      image: Images.category2,
      title: "Headphone",
      description: "3M Items",
    },
    {
      image: Images.category3,
      title: "Laptop",
      description: "1.2M Items",
    },
    {
      image: Images.category4,
      title: "Music",
      description: "751K Items",
    },
    {
      image: Images.category5,
      title: "Photography",
      description: "1.0M Items",
    },
    {
      image: Images.category6,
      title: "Furniture",
      description: "88K Items",
    },
    {
      image: Images.category7,
      title: "Health",
      description: "761K Items",
    },
    {
      image: Images.category8,
      title: "Sports",
      description: "2.9K Items",
    },
  ];
  return (
    <div className="categories-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Categories</h2>
        </div>
        <div className="categories">
          {categories.map(({ image, title, description }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="Category" />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <button>Show All</button>
      </div>
    </div>
  );
};

export default Categories;
