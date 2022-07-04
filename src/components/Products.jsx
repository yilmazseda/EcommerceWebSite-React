import React from "react";
import { Images } from "../utilies/images";
import { BsChevronDown } from "react-icons/bs";
const Products = () => {
  const products = [
    {
      image: Images.compare1,
      name: "Asus Zenbook Pro",
      model: "UX-430 US",
      processor: "Intel&reg; Core&trade; i3 7100U Processor",
      os: "Windows 10 Pro for business",
    },
    {
      image: Images.compare2,
      name: "Lenevo Legion",
      model: "Y545 2022",
      processor: "Intel&reg; Core&trade; i7 9100U Processor",
      os: "Windows 10 Pro for Enterprise",
    },
    {
      image: Images.compare1,
      name: "Acer Swift Air",
      model: "SF-313 51",
      processor: "Intel&reg; Core&trade; i3 7100X Processor",
      os: "Windows 10 Pro for business",
    },
    {
      image: Images.compare2,
      name: "Lenevo Thinkpad Y51",
      model: "X1 2022",
      processor: "Intel&reg; Core&trade; i5 8000C Processor",
      os: "Windows 10 Pro for business",
    },
  ];
  return (
    <div className="products-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Compare the Product</h2>
          <button>New Comparision</button>
        </div>
        <div className="products">
          {products.map(({ image, name, model, processor, os }, index) => {
            return (
              <div className="product" key={index}>
                <div className="image">
                  <img src={image} alt="Product" />
                </div>
                <h4>{name}</h4>
                <h4>{model}</h4>
                <hr />
                <div className="processor">
                  <img src={Images.processorimage} alt="processor" />
                  <h4>Processor</h4>
                  <p>{processor}</p>
                </div>
                <div className="os">
                  <img src={Images.osimage} alt="os" />
                  <h4>Operating Systeö</h4>
                  <p>{os}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
