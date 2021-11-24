import React from "react";
import { ListGroup } from "react-bootstrap";
export default function Sucursal(props){
    return<ListGroup.Item>
        <span>{props.data.lugar}</span>
    </ListGroup.Item>
}