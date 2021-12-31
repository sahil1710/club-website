import React from "react";
import Nav from "./Nav";
import Event from "./Event";
import image from "./images/nirma.png";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import EventCard from "./EventCard";
import Footer from "./Footer";

function Events() {
  return (
    <div>
      <Nav isNotIndex />
      {/* <Event /> */}
      <Heading>
          <h1>Current Events</h1>
      </Heading>
      <Container>
        <WrapCard>
      <EventCard />
      </WrapCard>

      <WrapCard>
      <EventCard />
      </WrapCard>
      <WrapCard>
      <EventCard />
      </WrapCard>
      
      </Container>

      <Heading>
          <h1>Upcoming Events</h1>
      </Heading>
      <Container>
        <WrapCard>
      <EventCard />
      </WrapCard>

      <WrapCard>
      <EventCard />
      </WrapCard>
      <WrapCard>
      <EventCard />
      </WrapCard>
      
      </Container>
      <Footer />
      
      <Routes>
        <Route path='/events/event' element={<Event />}></Route>
      </Routes>
    </div>
  );
}

export default Events;


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