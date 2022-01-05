import React from "react";
import styled from "styled-components";
import "./Index.css";
import Nav from "./Nav";
import Zoom from "react-reveal/Zoom";
import image from "./images/logo-3.webp";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";

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

        <NavLink to='/home'>
          <Fade delay={2250} duration={500}>
            <div className="btn">Explore</div>
          </Fade>
          </NavLink>
      </div>
    </Container>
  );
}

export default Index;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
