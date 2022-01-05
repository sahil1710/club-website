import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import webaces from './images/webaces.webp'
import logo from './images/logo-3.webp'

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={webaces} />
            </Wrap>
            <Wrap>
                <img src={logo} />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
position: relative;
margin-top: 40px;
width: 80%;
margin: auto;
z-index: 2 !important;
button{
    z-index: -3;
}

@media (max-width: 978px) {
    z-index: -1 !important;
    width: 90%;
.slick-next:before,.slick-prev:before {
    display: none;
}

}
`

const Wrap = styled.div`
img{
    border-radius: 4px;
    border: 4px solid transparent;
    width:100%;
    height: 400px;
    z-index: -2 !important;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover{
        border: 4px solid rgba(0,184,184)
    }
}
`