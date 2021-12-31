import React from 'react'
import './EventCard.css'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import image from "./images/pythonai.jpg";

function EventCard() {
    return (
        <>
        <FrontCard>
          
          <div className="our-event">

            <WrapImg>
              <img src={image} alt='' />
            </WrapImg>
            
            <Heading>
          <h1>Python Programming & Artificial Intelligence</h1>
      </Heading>

          <WrapButton>

              <Button>
                <Fade delay={200} duration={500}>

                  <div className="event-btn"><a href="#">Register</a></div>
                </Fade>
              </Button>
              <Button>
                <Fade delay={200} duration={500}>
                  <div className="event-btn"><a href="https://sahil1710.github.io/club-website/#/events/event">More </a></div>
                </Fade>
              </Button>
              </WrapButton>
          </div>
        </FrontCard>
        </>
    )
}

export default EventCard


const FrontCard = styled.div``;

const WrapImg = styled.div`
img{
  width:100%;
  height:300px;

}
`;

const WrapButton = styled.div`
display: flex;
justify-content: center;
`




const Heading = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
h1{font-size: 18px};
`

const Button = styled.div`
margin-left: 10px;`;