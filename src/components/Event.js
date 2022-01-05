import React from "react";
import Nav from "./Nav";
import "./Event.css";
import image from "./images/pythonai.webp";
import styled from "styled-components";
import Footer from "./Footer";

function Event() {
  const tab = {
    overflowY: "scroll !important",
    display: "block",
    top: "0px",
    opacity: 1,
  };

  const font = {
    fontFamily: "euro",
    letterSpacing: "1px",
    fontSize: "20px",
  };
  return (
    
    <div>
      <Nav isNotIndex/>
      <Wrap>
      <div className="event-container">
        <div className="img-div">
          <div>
            <img src={image} alt="" className="img-thumbnail" />

            <div className="re-btn">Register</div>
          </div>
        </div>
        <div className="content-div">
          <div>
          <h1>Python Programming & Artificial Intelligence</h1>
          </div>

          

          {/* <Details > */}
            <div className="tabcontent" style={tab}>
          <p>
          Master the fundamentals of writing Python scripts using various
            libraries and apply basic principles of AI in solutions that require
            problem solving, perception and learning.

            
              <span style={font}>Eligibility:</span>
              Participants will have to register individually for each workshop.
              <br /> <br />
              <span style={font}>Payment Instructions:</span>
              While paying the fees, login with the same credentials with which
              you had registered on the Techfest Website. Please enter the data
              correctly for us to process your payment information properly.
              <br /> <br />
              <span style={font}>Prerequisites:</span>
              A laptop/PC with Microsoft Windows (7 or later &amp; Minimum 4GB
              RAM), configuration Internet Connectivity (Typically to be able to
              do video call / conferencing), Notepad &amp; Pen.
              <br /> <br />
              <span style={font}>Certificate Criterion:</span>
              Participants should be present in all the sessions. Failing this,
              no certificate will be awarded to the participant. Certificate of
              Training from Techfest, IIT Bombay will be given to all the
              participants.
              <br /> <br />
              No Refunds will be entertained after 30th November 2021. **Limited
              number of seats** If the Workshop gets cancelled, all the
              participants will be given full refund, irrespective of the
              Deadline.
            </p>
            </div>
          {/* </Details> */}
        </div>
      </div>
      </Wrap>
      <Footer />
    </div>
  );
}

export default Event;

const Wrap = styled.div`
  margin-top: 100px;

  @media(max-width:968px){
    margin-top:80px;
  }
`;

// const Details = styled.div`
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   overflow: hidden;
//   height: 400px;
//   border: 1px solid rgb(255, 255, 255);
//   border-radius: 5px;
//   background-color: rgba(255, 255, 255, 0.1);
//   margin-bottom: 10px;
//   padding: 5px;
// `;
