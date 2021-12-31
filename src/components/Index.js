import React from "react";
import styled from "styled-components";
import "./Index.css";
import Nav from "./Nav";
import Zoom from "react-reveal/Zoom";
import image from "./images/logo-3.png";
import { Fade } from "react-reveal";

function Index(props) {

  return (
    <Container>
      <Nav />
      <div className="main">
        <Zoom top duration={2000} delay={500}>
          <img className={`logo`} src={image}></img>
        </Zoom>
        <Fade bottom duration={2000} delay={1750}>
          <p className="font">Association of Computer Engineering Students</p>
        </Fade>

        <a href="/home">
          <Fade delay={2250} duration={500}>
            <div className="btn">Explore</div>
          </Fade>
        </a>
      </div>
    </Container>
  );
}

export default Index;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
