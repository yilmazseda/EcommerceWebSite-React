import React from "react";
import { Images } from "../utilies/images";
const Promo = () => {
  return (
    <div className="promo-container">
      <div className="container mx-3 py-3">
        <div className="content">
          <div className="title-container">
            <h2>Never Miss A Promo</h2>
            <p>
              We always give our customers a promo for being loyal to us. Just
              subscribe to us
            </p>
          </div>
          <div className="subscribe-container">
            <input type="email" placeholder="yourname@email.com" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="promo-image">
          <img src={Images.promo} alt="Promo" />
        </div>
      </div>
    </div>
  );
};

export default Promo;
