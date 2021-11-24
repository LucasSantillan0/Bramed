import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CarouselHome from "./CarouselHome";
import PlanesImg from "./DetailsHome/PlanesImg";
import AcordionSide from "./DetailsHome/AcordionSide";
import Footer from "./DetailsHome/Footer";
import Hometext from "./hometext.jsx";
export default function Home (){
    return <Container xs = {11} className='bg-light shadow-1-strong'>
        <Row>
            <Col xs={window.screen.width<600?12:9} >
                <PlanesImg></PlanesImg>
                <CarouselHome/>
                <Hometext/>
            </Col>
            <Col xs={3} className ="responsivePrincipalCol onlyMonitor">
                <AcordionSide className="onlyMonitor"/>
            </Col>
            <Footer/>
        </Row>
 
    </Container>
}