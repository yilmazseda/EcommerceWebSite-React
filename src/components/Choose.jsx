import React from "react";
import { Images } from "../utilies/images";
import Products from "./Products";
const Choose = () => {
  const data = [
    {
      image: Images.choose1,
      title: "Have Most Stock",
      description: "We have many stock until next year to supply you needs.",
    },
    {
      image: Images.choose2,
      title: "100% Secure",
      description:
        "You don't need to worry when transaction is on our platform now.",
    },
    {
      image: Images.choose3,
      title: "24/7 Support",
      description: "If any problem use our platform you cantact use free.",
    },
    {
      image: Images.choose4,
      title: "Free Delivery",
      description:
        "Wherever you are, we make sure you get free delivery service.",
    },
    <Products />,
  ];
  return (
    <div className="choose-us-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Why Choose us than others?</h2>
          <p>
            Many reasons why customer choose us than other ecommerce. We have
            some plus point that maybe other can't have.
          </p>
        </div>
        <div className="content">
          <div className="choose-us">
            {data.map(({ image, title, description }, index) => {
              return (
                <div className="choose" key={index}>
                  <img src={image} alt="choose" />
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
          <div className="delivery">
            <img src={Images.choose} alt="delivery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
