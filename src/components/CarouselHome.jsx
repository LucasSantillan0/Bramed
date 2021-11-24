import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../imgs/carousel/banner_6.jpg"
import banner2 from "../imgs/carousel/imag_13.jpg"
import banner3 from "../imgs/carousel/imag_211.jpg"

export default function CarouselHome (){
    return <Carousel className ="mx-auto responsiveCarousel" >
        <Carousel.Item>
            <img  className="d-block rounded responsiveCarousel" src={banner1}></img>
        </Carousel.Item>
        <Carousel.Item>
            <img  className="d-block rounded responsiveCarousel" src={banner2}></img>
        </Carousel.Item>
        <Carousel.Item>
            <img  className="d-block rounded responsiveCarousel" src={banner3}></img>
        </Carousel.Item>
    </Carousel>
}