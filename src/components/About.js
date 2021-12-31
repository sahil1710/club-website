import React from "react";
import Nav from "./Nav";
import "./About.css";
import background from "./images/background.jpg";
import vision from "./images/vision.png";
import mission from "./images/mission.png";
import aces from "./images/aces.png";
import nirma from "./images/nirma.png";
import styled from "styled-components";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function About() {
  return (
    <div>
      <Fade duration={1500}>
        <Nav isNotIndex />

        <Wrap>
          <div id="#home-section">
            <div className="dark-overlay">
              <div className="home-inner container">
                <div className="row">
                  <div className="col-lg-8 d-none d-lg-block">
                    <h1 className="display-4">
                      Join <strong>ACES </strong> Community to Built{" "}
                      <strong>Strong Profiles</strong>
                    </h1>
                    <div className="d-flex">
                      <div className="p-4 align-self-start">
                      <i className="fas fa-arrow-right fa-2x bg-transparent text-white"></i>
                      </div>
                      <div className="p-4 align-self-end">
                        neque possimus omnis eum voluptates voluptatibus amet
                        debitis ut laudantium itaque illo cum earum dolore quam.
                        Non laudantium exercitationem atque quaerat. Possimus,
                        minima a!
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="p-4 align-self-start">
                        <i className="fas fa-arrow-right fa-2x bg-transparent text-white"></i>
                      </div>
                      <div className="p-4 align-self-end">
                        neque possimus omnis eum voluptates voluptatibus amet
                        debitis ut laudantium itaque illo cum earum dolore quam.
                        Non laudantium exercitationem atque quaerat. Possimus,
                        minima a!
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="p-4 align-self-start">
                      <i className="fas fa-arrow-right fa-2x bg-transparent text-white"></i>
                      </div>
                      <div className="p-4 align-self-end">
                        neque possimus omnis eum voluptates voluptatibus amet
                        debitis ut laudantium itaque illo cum earum dolore quam.
                        Non laudantium exercitationem atque quaerat. Possimus,
                        minima a!
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <section id="subscribe" className="container my-5">
                      <span>
                        <i className="fas fa-solid fa-user pr-2 bg-transparent"></i>
                      </span>
                      <span className="blockquote">
                        Not a Member Yet? Join Here!
                      </span>

                      <div className="row mt-5">
                        <div className="w-100 mb-3">
                          <input
                            className="form-control subscribe-inputs text-light"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="w-100 mb-3">
                          <input
                            className="form-control subscribe-inputs text-light"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="w-100 mb-3">
                          <input
                            className="form-control subscribe-inputs text-light"
                            type="number"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="w-100">
                          <input
                            className="form-control subscribe-inputs text-light"
                            type="email"
                            placeholder="Email Address"
                          />
                        </div>
                        <div
                          className="btn btn-outline-dark about-btn btn-block text-light mt-5"
                          type="submit"
                        >
                          <h4>Join Now</h4>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrap>

        <section id="about">
          <div className="container mt-5">
            <section id="vision_mission">
              <div className="row">
                <div className="col-3">
                  <Slide left duration={1000}>
                    <img className="card-img-top " src={nirma} alt="vision" />
                  </Slide>
                </div>
                <div className="col-9">
                  <div className="card bg-transparent text-center">
                    <Fade bottom duration={1500}>
                      <div className="card-header display-4 d-flex justify-content-center">
                        <h1>Nirma University</h1>
                      </div>
                    </Fade>
                    <Fade top duration={1500}>
                      <div className="card-body">
                        <div className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quo reprehenderit nostrum voluptas facere
                          explicabo sint voluptates tenetur, libero, aut facilis
                          nihil qui aspernatur iure enim nemo adipisci! Velit,
                          ratione! Debitis, vel? Et accusamus suscipit
                          recusandae debitis accusantium quibusdam
                          reprehenderit? Reprehenderit?
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  <div className="card bg-transparent text-center">
                    <Fade bottom duration={1500}>
                    <div className="card-header display-4 d-flex justify-content-center">
                      <h1>The ACES Club</h1>
                    </div>
                    </Fade>
                    <Fade top duration = {1500}>
                    <div className="card-body">
                      <div className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nisi, magnam. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Temporibus ullam alias
                        obcaecati nisi voluptatibus quo tenetur excepturi
                        aspernatur odit quos?
                      </div>
                    </div>

                    </Fade>
                  </div>
                </div>
                <Slide right duration={1500}>
                <div className="col-3">
                  <img className="card-img-top " src={aces} alt="vision" />
                </div>
                </Slide>
              </div>

              <div className="row">
                <div className="col-3">
                <Slide left duration={1500}>
                  <img className="card-img-top " src={vision} alt="vision" />
                  </Slide>
                </div>
                <div className="col-9">
                  <div className="card bg-transparent text-center">
                    <Fade bottom duration={1500}>
                    <div className="card-header display-4 d-flex justify-content-center">
                      <h1>Vision </h1>
                    </div>
                    </Fade>
                    <Fade top duration={1500}>
                    <div className="card-body">
                      <div className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nisi, magnam. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Temporibus ullam alias
                        obcaecati nisi voluptatibus quo tenetur excepturi
                        aspernatur odit quos?
                      </div>
                    </div>
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-9">
                  <div className="card bg-transparent text-center">
                  <Fade bottom duration = {1500}>
                    <div className="card-header display-4 d-flex justify-content-center">
                      <h1>Mission </h1>
                    </div>
                    </Fade>
                    <Fade top duration = {1500}>
                    <div className="card-body">
                      <div className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nisi, magnam. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Temporibus ullam alias
                        obcaecati nisi voluptatibus quo tenetur excepturi
                        aspernatur odit quos?
                      </div>
                    </div>
                    </Fade>
                  </div>
                </div>
                <Slide right duration={1500}>
                <div className="col-3">
                  <img className="card-img-top " src={mission} alt="vision" />
                </div>
                </Slide>
              </div>
            </section>
          </div>
        </section>

        <Footer />
      </Fade>
    </div>
  );
}

export default About;

const Wrap = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  z-index: -5;

  margin-top: 15px;
`;
