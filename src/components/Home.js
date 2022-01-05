import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import "./galleryCSS.css";
import Slide from "react-reveal/Slide";
import ImgSlider from "./ImgSlider";
import Footer from "./Footer";
import image1 from "./images/gallery/image1.webp";
import image2 from "./images/gallery/image2.webp";
import image3 from "./images/gallery/image3.webp";
import image4 from "./images/gallery/image4.webp";
import image5 from "./images/gallery/image5.webp";
import image6 from "./images/gallery/image6.webp";
import image7 from "./images/gallery/image7.webp";
import image8 from "./images/gallery/image8.webp";
import image9 from "./images/gallery/image9.webp";
import image10 from "./images/gallery/image10.webp";
import image11 from "./images/gallery/image11.webp";
import { Fade } from 'react-reveal';

function Home() {
  return (
    <div>
      
        <Nav isNotIndex />
      
      <Wrap>
          <ImgSlider />
      
      
      <div className="container">
        <div className="heading">
          <h1>
            Photo <span>Gallery</span>
          </h1>
        </div>

        <div className="box">
        {/* <Slide left duration={1500}> */}
          <div className="dream">
            <Fade right duration = {1500} delay={500}>
            <img src={image1} />
            </Fade>
            <Fade right duration = {1500} delay={500}>
            <img src={image2} />
            </Fade>
            <Fade right duration = {1500} delay={500}>
            <img src={image3} />
            </Fade>
            <Fade right duration = {1500} delay={500}>
            <img src={image4} />
            </Fade>
          </div>
          {/* </Slide> */}

{/* <Slide bottom duration={1500}> */}
          <div className="dream">
          <Fade top duration = {1500} delay ={800}>
            <img src={image6} />
            </Fade>
            <Fade top duration = {1500} delay ={800}>
            <img src={image6} />
            </Fade>
            <Fade top duration = {1500} delay ={800}>
            <img src={image7} />
            </Fade>
            <Fade top duration = {1500} delay ={800}>
            <img src={image8} />
            </Fade>
          </div>
          {/* </Slide> */}

          {/* <Slide left duration={1500}> */}
          <div className="dream">
          <Fade left duration = {1500} delay={500}>
            <img src={image9} />
            </Fade>
            <Fade left duration = {1500} delay={500}>
            <img src={image10} />
            </Fade>
            <Fade left duration = {1500} delay={500}>
            <img src={image11} />
            </Fade>
            <Fade left duration = {1500} delay={500}>
            <img src={image2} />
            </Fade>
          </div>
          {/* </Slide> */}
        </div>
      </div>
      <Footer />
      </Wrap>
    </div>
  );
}

export default Home;

const Wrap = styled.div`
  margin-top: 100px;
`;
