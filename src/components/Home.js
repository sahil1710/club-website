import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import "./galleryCSS.css";
import Slide from "react-reveal/Slide";
import ImgSlider from "./ImgSlider";
import Footer from "./Footer";
import image1 from "./images/gallery/image1.jpg";
import image2 from "./images/gallery/image2.jpg";
import image3 from "./images/gallery/image3.jpg";
import image4 from "./images/gallery/image4.jpg";
import image5 from "./images/gallery/image5.jpg";
import image6 from "./images/gallery/image6.jpg";
import image7 from "./images/gallery/image7.jpg";
import image8 from "./images/gallery/image8.jpg";
import image9 from "./images/gallery/image9.jpg";
import image10 from "./images/gallery/image10.jpg";
import image11 from "./images/gallery/image11.jpg";
import { Fade } from "@mui/material";

function Home() {
  return (
    <div>
      <Slide top duration={1000}>
        <Nav isNotIndex />
      </Slide>
        <WrapSlider>
          <ImgSlider />
        </WrapSlider>
      


      <div className="container">
        <div className="heading">
          <h1>
            Photo <span>Gallery</span>
          </h1>
        </div>

        <div className="box">
        <Slide left duration={1500}>
          <div className="dream">
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
          </div>
          </Slide>

<Slide bottom duration={1500}>
          <div className="dream">
            <img src={image5} />
            <img src={image6} />
            <img src={image7} />
            <img src={image8} />
          </div>
          </Slide>

          <Slide left duration={1500}>
          <div className="dream">
            <img src={image9} />
            <img src={image10} />
            <img src={image11} />
            <img src={image2} />
          </div>
          </Slide>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;

const WrapSlider = styled.div`
  margin-top: 20px;
`;
