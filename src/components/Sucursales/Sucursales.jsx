import React from "react";
import Data from "./Data";
import { Container, ListGroup } from "react-bootstrap";
import Sucursal from "./Sucursal";
export default function Sucursales(){
    return<Container>
        <ListGroup>
            {Data.map(s=><Sucursal data={s}/>)}
        </ListGroup>
    </Container>

}