import React, { PureComponent } from "react";


import ImageSlider from "../components/ImageSlider";

import image1 from "../assets/slide-1.jpg";
import image2 from "../assets/slide-2.jpg";
import image3 from "../assets/slide-3.jpg";
import Header from "../components/header/Header";
import About from "../About/About";
import Tunisia from "../Tunisia/Tunisia";
import { Contact } from "../SectionContact/Contact";


const Application = () => {
  return (
    <>
   
      <div>
        <ImageSlider images={[image1, image2, image3]}>
              <Header />
        </ImageSlider>
        <About />
        <Tunisia />
     
      </div>
    </>
  );
};

export default Application;