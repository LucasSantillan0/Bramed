import React from "react";
import Data from "./Data";
import { Container, ListGroup } from "react-bootstrap";
import Sucursal from "./Sucursal";
import Footer from "../DetailsHome/Footer";
export default function Sucursales(){
    return<ListGroup>
            <h4>Cordoba</h4>
            {Data.filter(s=>s.provincia==="Cordoba").map(s=><Sucursal data={s}/>)}
            <h4>Buenos Aires</h4>
            {Data.filter(s=>s.provincia==="Buenos Aires").map(s=><Sucursal data={s}/>)}
            <Footer/>               
        </ListGroup>
 

}