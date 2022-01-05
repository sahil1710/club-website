import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Contact.css";
import image from './images/aces.webp'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CreateIcon from "@mui/icons-material/Create";
import styled from "styled-components";

function Contact() {
  return (
    <div>
      <Nav isNotIndex />

<Container>
      <WrapBox>
          <div className="row">
            <div className="col-lg-9">
              <div className="card card-body py-5 bg-transparent">
                <h1 className="display-4">Get in Touch !</h1>
                <p className="lead">You can post any of your queries here</p>
                <form>
                  <Wrap>
                    <div className="form-group">
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text color text-white">
                            <Account />
                          </span>
                        </div>
                        <input
                          className="form-control bg-dark text-white"
                          type="text"
                          placeholder="username"
                        />
                      </div>
                    </div>
                  </Wrap>

                  <Wrap>
                    <div className="form-group">
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text color text-white">
                            <Email />
                          </span>
                        </div>
                        <input
                          className="form-control bg-dark text-white"
                          type="email"
                          placeholder="email address"
                        />
                      </div>
                    </div>
                  </Wrap>

                  <Wrap>
                    <div className="form-group">
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text color-text text-white">
                            <Write />
                          </span>
                        </div>

                        <textarea
                          className="form-control bg-dark text-white"
                          placeholder="enter your message"
                          cols="30"
                          rows="2"
                        ></textarea>
                      </div>
                    </div>
                  </Wrap>
                  <button type="submit" className="btn-con">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-3 align-self-center col-img">
              <img src={image} alt="" className="img-fluid" />
            </div>
          </div>
      </WrapBox>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;

const Container = styled.div`
margin-top:60px;
`

const Wrap = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const WrapBox = styled.div`
width:90%;
margin: auto;
`

const Account = styled(AccountCircleIcon)``;

const Email = styled(EmailIcon)``;

const Write = styled(CreateIcon)``;
