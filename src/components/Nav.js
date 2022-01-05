import React, { useState, useEffect } from "react";
import styled from "styled-components";
import nirma from "./images/nirma.webp";
import logo from "./images/aces.webp";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./Index.css";

function Nav(props) {
  const [burgerStatus, setBurgerStatus] = useState(true);

  const [nav, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 70){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

  const font = {
    // fontFamily: 'Georgia',
    fontFamily: "Cambria",
    fontWeight: 500,
    fontSize: "16px",
    // paddingTop: "5px",
    // paddingRight: "5px",
    paddingLeft: 0,
    paddingBottom: "10px",
  };

  const aces = {
    // fontFamily: 'Georgia',
    fontFamily: "Cambria",
    fontWeight: 500,
    fontSize: "20px",
    padding: "5px",
    paddingBottom: "10px",
  };

  const menuFont = {
    fontFamily: "Cambria",
    fontWeight: 400,
    fontSize: "20px",
  };

  return (
    <Container>
      <div className= {`nav-div ${nav && "nav-bg"}`}>
      <NavItem>
        <Slide left duration={500}>
          <a href="#">
            <img src={logo} alt=""></img>
          </a>
        </Slide>

        <WrapNav>
          <div>
            <Fade top duration={500} delay={500}>
              <p style={aces}>ACES</p>
            </Fade>
          </div>
        </WrapNav>
      </NavItem>

      {props.isNotIndex && (
        <Slide top duration={500}>
          <WrapNavbar>
          <Navbar>
            <NavMenu>
              <p style={menuFont}>
                <a className="link" href="#/home">
                  Home
                </a>
              </p>
            </NavMenu>
            <NavMenu>
              <p style={menuFont}>
                <a className="link" href="#/about">
                  About Us
                </a>
              </p>
            </NavMenu>
            <NavMenu>
              <p style={menuFont}>
                <a href="#/events" className="link">
                  Events
                </a>
              </p>
            </NavMenu>
            <NavMenu>
              <p style={menuFont}>
                <a className="link" href="#/team">
                  Team
                </a>
              </p>
            </NavMenu>
            <NavMenu>
              <p style={menuFont}>
                <a className="link" href="#/contact">
                  Contact
                </a>
              </p>
            </NavMenu>
          </Navbar>
          </WrapNavbar>
        </Slide>
      )}

      <Wrap>
        <Slide right duration={500}>
          <WrapMenu>
            <CustomMenu onClick={() => setBurgerStatus(false)} />
          </WrapMenu>
        </Slide>
        <WrapNav>
          <NavItem>
            <Slide right duration={500}>
              <a>
                <img src={nirma} alt=""></img>
              </a>
            </Slide>
            <div>
              <Fade top duration={500} delay={500}>
                <p style={font}>
                  Nirma
                  <br />
                  University
                </p>
              </Fade>
            </div>
          </NavItem>
        </WrapNav>
      </Wrap>

     <BurgerNav show={burgerStatus}>
        <WrapClose>
          <CustomClose onClick={() => setBurgerStatus(true)} />
        </WrapClose>
        <li>
          <a href="#/home">Home</a>
        </li>
        <li>
          <a href="#/about">About Us</a>
        </li>
        <li>
          <a href="#/events">Events</a>
        </li>
        <li>
          <a href="#/team">Team</a>
        </li>
        <li>
          <a href="#/contact">Contact</a>
        </li>
      </BurgerNav>
      </div>
      
    </Container>
  );
}

export default Nav;

const Container = styled.div`
position:fixed;
top: 0;
  width: 100%;
  max-height: 54px;
  z-index: 10 !important;
  // background-color: ${(props) => props.nav ? "red" : "blue"};

  // @media (max-width: 768px) {
  //   margin-top: 0;
  //   padding: 0;
  //   padding-right: 20px;
  // }
`;

const WrapNav = styled.div`
  @media (max-width: 978px) {
    display: none;
  }
`;

const BurgerNav = styled.div`
  display: none;

  @media (max-width: 978px) {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 5px;
    background-color: #45a29e;
    width: 300px;
    height: 100vh;
    list-style: none;
    padding: 20px;
    display: flex;
    z-index: 100;
    flex-direction: column;
    text-align: start;

    transform: ${(props) =>
      props.show ? "translateX(100%)" : "translateX(0)"};

    li {
      padding: 10px 0;
      border-bottom: 1px solid #1f2833;

      a {
        color: white;
      }
    }
  }
`;

const CustomClose = styled(CloseIcon)``;

const CustomMenu = styled(MenuIcon)`
width: 40px;
height: 40px;
padding-top: 5px;
padding-left: 3px;
`;
const Wrap = styled.div``;

const WrapClose = styled.div`
  display: flex;
  justify-content: end;
`;

const WrapMenu = styled.div`
  display: none;

  @media (max-width: 978px) {
    display: block;
  }
`;

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

  img{
    height: 50px;
    padding:2px;
  }

  @media (max-width: 978px) {
    img{
      height: 35px;
    }
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 978px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  margin: 0 15px;
  a:hover{
    transform: scale(1.5);
  }
`;

const WrapNavbar = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
`