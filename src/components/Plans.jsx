import React from "react";
import omega from "../imgs/planes/plan_omega.jpg"
import delta from "../imgs/planes/plan_delta.jpg"
import genesis from "../imgs/planes/plan_genesis.jpg"
import {Accordion, Col,Row, Container} from "react-bootstrap";
import Footer from "./DetailsHome/Footer";
let ancho=500;

export default function Plans (){

    return <Container xs = {11} className='bg-light shadow-1-strong'>

        <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Plan Omega</Accordion.Header>
    <Accordion.Body>
      <img src={omega} style={{width:ancho}}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Plan Delta</Accordion.Header>
    <Accordion.Body>
    <img src={delta} style={{width:ancho}}/>
    </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
    <Accordion.Header>Plan Genesis</Accordion.Header>
    <Accordion.Body>
    <img src={genesis} style={{width:ancho}}/>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Footer/>
</Container>
}




