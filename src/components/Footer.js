import React from "react";
import "./Footer.css";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import EmailIcon from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div>
      <footer>
        {/* <span className="border-shape"></span> */}
        <div className="bottom_content">
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <LinkedIn />
            </a>
            <a href="">
              <Reddit />
            </a>

            <a href="">
              <Email />
            </a>
        </div>
        <div className="copyright">
          Copyright © 2021 StartNU - All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default Footer;

const Facebook = styled(FacebookIcon)``;

const LinkedIn = styled(LinkedInIcon)``;

const Twitter = styled(TwitterIcon)``;

const Reddit = styled(RedditIcon)``;

const Email = styled(EmailIcon)``;

const InstagramIcon = styled(Instagram)``;
