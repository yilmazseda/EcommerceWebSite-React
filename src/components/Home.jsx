import React from "react";
import { BiSearch } from "react-icons/bi";
// import home from "../assets/home.png";
import { Images } from "../utilies/images";

const Home = () => {
  return (
    <div className="home">
      <div className="container mx-3 py-3">
        <div className="title-container">
          <h2>Browse Million Product for your Needs</h2>
          <div className="input-container">
            <input type="text" placeholder="ı want to buy"></input>
            <div className="icon">
              <BiSearch />
            </div>
          </div>
        </div>
        <div className="extra-image">
          <img src={Images.home} alt="Home" />
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
