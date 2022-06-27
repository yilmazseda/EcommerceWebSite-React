import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { Images } from "../utilies/images";

const Services = () => {
  return (
    <div className="services-container mx-3 py-3">
      <div className="container">
        <div className="service one">
          <p>Weekly Deals</p>
          <h4>Free Delivery</h4>
          <button>Learn More</button>
          <div className="image">
            <img src={Images.service1} alt="service1" />
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Disc up 25%</h4>
            <p>
              Lear More <HiArrowSmRight />
            </p>
          </div>
          <div className="image">
            <img src={Images.service2} alt="service2" />
          </div>
        </div>
        <div className="service three">
          <div className="image">
            <img src={Images.service3} alt="service3" />
          </div>
          <div className="content">
            <h4>Free 5GB Data</h4>
            <p>
              Lear More <HiArrowSmRight />
            </p>
          </div>
        </div>
        <div className="service four">
          <p>Monthly Deals</p>
          <h4>Free Delivery</h4>
          <p>
            Lear More <HiArrowSmRight />
          </p>
          <div className="image">
            <img src={Images.service4} alt="service4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
