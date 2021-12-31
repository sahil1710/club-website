import React, { useState } from "react";
import "./Card.css";
import styled from "styled-components";
import { Fade } from "react-reveal";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import EmailIcon from '@mui/icons-material/Email';

function Card(props) {
  const [cardStatus, setCardStatus] = useState(true);
  
  if (cardStatus == true) {
    return (
      <>
        <FrontCard>
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src={props.image}
              />
            </div>
            <div className="team-content">
              <h3 className="name">{props.name}</h3>
              <h4 className="title">{props.position}</h4>
              <Social>
                <WrapSocial>
                  <a href="#" target="blank_">
                    <Facebook />
                  </a>
                </WrapSocial>

                <WrapSocial>
                  <a href="#" target="blank_">
                    <LinkedIn />
                  </a>
                </WrapSocial>

                <WrapSocial>
                  <a href="#" target="blank_">
                    <Twitter />
                  </a>
                </WrapSocial>

                <WrapSocial>
                  <a href="#" target="blank_">
                    <Reddit />
                  </a>
                </WrapSocial>

                <WrapSocial>
                  <a href="#" target="blank_">
                    <Email />
                  </a>
                </WrapSocial>
              </Social>
            </div>
            <div className="social">
              <Button onClick={() => setCardStatus(false)}>
                <Fade delay={200} duration={500}>
                  <button className="team-btn">About</button>
                </Fade>
              </Button>
            </div>
          </div>
        </FrontCard>
      </>
    );
  } else {
    return (
      <>
        <BackCard>
          <div className="our-team-back">
            <div className="info">
            <p>
            {props.about}
            </p>
            </div>

          <Button onClick={() => setCardStatus(true)}>
                <Fade delay={200} duration={500}>
                  <button className="team-btn">Back</button>
                </Fade>
          </Button>
          </div>
        </BackCard>
      </>
    );
  }
}

export default Card;

const Social = styled.div`
  width: 80%;
  height: 20px;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-around;
`;

const WrapSocial = styled.div`
  a {
    color: white;
  }
`;

const Facebook = styled(FacebookIcon)``;

const LinkedIn = styled(LinkedInIcon)``;

const Twitter = styled(TwitterIcon)``;

const Reddit = styled(RedditIcon)``;

const Email = styled(EmailIcon)``;

const FrontCard = styled.div``;

const BackCard = styled.div``;

const Button = styled.div``;
