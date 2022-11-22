import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
// import Newsletter from "../components/Newsletter";
import Slider from "../components/slider/Slider";
import New from "../components/New";
import Testimonials from "../components/Testimonials";
import "./master.css";
import "./normalize.css";
import Services from "../components/Services";
const Home = () => {
  return (
    <div>
      <Slider />
      <Services/>
      <Categories />
      <New />
      {/* <Newsletter /> */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
