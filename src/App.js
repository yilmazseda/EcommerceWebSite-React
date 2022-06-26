import React, { useState } from "react";
import "./scss/index.scss";
// import Categories from "./components/Categories";
// import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Services from "./components/Services";
// import Recomended from "./components/Recomended";
// import Choose from "./components/Choose";
// import Products from "./components/Products";
// import Promo from "./components/Promo";
// import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="app">
      {/* <ScrollToTop /> */}
      <Navbar />
      <Home />
      {/* <Services />
      <Categories />
      <Recomended />
      <Choose />
      <Products />
      <Promo />
      <Footer />   */}
    </div>
  );
};

export default App;
