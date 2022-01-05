import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"
import Card from "./Card";
import styled from "styled-components";
import ps from "./images/team/FA_pooja_shah.webp";
import sm from "./images/team/FA_sapan_sir.webp";
import KS from "./images/team/PRE_KS.webp";
import MV from "./images/team/VC-MV.webp";
import KT from "./images/team/GS_KJ.webp";
import NT from "./images/team/MD-NT.webp";
import SC from "./images/team/MD_SC.webp";
import AS from "./images/team/OS_AS.webp";
import MS from "./images/team/DG-MS.webp";
import SP from "./images/team/TH_SP.webp";
import YT from "./images/team/TH_YT.webp";
import KM from "./images/team/TRE_KM.webp";
import YS from "./images/team/ED-YS.webp";
import SG from "./images/team/CH_GS.webp";
import AR from "./images/team/PRO_AR.webp";
import ASGD from "./images/team/GD-AS.webp";
import SV from "./images/team/MC-SV.webp";
import MP from "./images/team/JS_MP.webp";
import Fade from 'react-reveal/Fade'

function Team() {
    const faculty = [{
        id: 0,
        name: "Pooja Shah",
        position: "Faculty Advisor",
        email: "pooja.shah@nirmauni.ac.in",
        image: ps,
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 1,
        name: "Sapan Mankad",
        position: "Faculty Advisor",
        email: "sapanmankad@nirmauni.ac.in",
        image: sm,
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }] 
  const team = [
    {
      id: 3,
      name: "Kanisha Shah",
      position: "President",
      email: "19BCE253@nirmauni.ac.in",
      image: KS,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      name: "Meet Vora",
      position: "Vice President",
      email: "19BCE299@nirmauni.ac.in",
      image: MV,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 5,
      name: "Kunj Thakkar",
      position: "General Secretary",
      email: "19BCE277@nirmauni.ac.in",
      image: KT,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 6,
      name: "Naman Thaker",
      position: "Managing Directior",
      email: "20BCE529@nirmauni.ac.in",
      image: NT,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 7,
      name: "Sachi Chaudhary",
      position: "Managing Directior",
      email: "19BCE@230nirmauni.ac.in",
      image: SC,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 8,
      name: "Akshat Shah",
      position: "Organizing Secretary",
      email: "19BCE246@nirmauni.ac.in",
      image: AS,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 9,
      name: "Mrunal Shah",
      position: "Director General",
      email: "19BCE135@nirmauni.ac.in",
      image: MS,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 10,
      name: "Shivam Panchal",
      position: "Technical Head",
      email: "19BCE150@nirmauni.ac.in",
      image: SP,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 11,
      name: "Yagnik Thummer",
      position: "Technical Head",
      email: "19BCE282@nirmauni.ac.in",
      image: YT,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 12,
      name: "Kalp Mepani",
      position: "Treasurer",
      email: "19BCE127@nirmauni.ac.in",
      image: KM,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 13,
      name: "Yash Savani",
      position: "Editor",
      email: "19BCE243@nirmauni.ac.in",
      image: YS,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 14,
      name: "Sakariya Gaurav",
      position: "Creative Head",
      email: "19BCE233@nirmauni.ac.in",
      image: SG,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 15,
      name: "Ansh Ray",
      position: "Public Relations Officer",
      email: "19BCE226@nirmauni.ac.in",
      image: AR,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 16,
      name: "Aayush Shah",
      position: "Graphic Designer",
      email: "19BCE245@nirmauni.ac.in",
      image: ASGD,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 17,
      name: "Savan Vaghani",
      position: "Membership Chair",
      email: "19BCE288@nirmauni.ac.in",
      image: SV,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 18,
      name: "Manan Patel",
      position: "Joint Secretary",
      email: "19BCE112@nirmauni.ac.in",
      image: MP,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div>
      <Wrap>
      <Nav isNotIndex />
      <Fade delay={750} duration={500}>
      <Heading>
          <h1>Faculty Advisors</h1>
      </Heading>
      </Fade>
      <Fade top duration={1500}>
<Container>
      {faculty.map((member) => (
          <WrapCard>
            <Card
              key={member.id}
              name={member.name}
              position={member.position}
              email={member.email}
              image={member.image}
              about={member.about}
            />
          </WrapCard>
        ))}
      </Container>
      </Fade>

      <Fade delay={750} duration={500}>
      <Heading>
          <h1>Board Members</h1>
      </Heading>
      </Fade>

      
      <Container>
        {team.map((member) => (
          <WrapCard>
            <Card
              key={member.id}
              name={member.name}
              position={member.position}
              email={member.email}
              image={member.image}
              about={member.about}
            />
          </WrapCard>
        ))}
      </Container>
      </Wrap>
      
     <Fade duration={1500}>
      <Footer />
      </Fade>
    </div>
  );
}

export default Team;

const Wrap = styled.div`
margin-top:60px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;

const WrapCard = styled.div`
  margin-left: 20px;
`;

const Heading = styled.div`
display: flex;
justify-content: center;
align-items: center;
`