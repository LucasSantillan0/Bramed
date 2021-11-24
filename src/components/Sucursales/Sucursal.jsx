import React from "react";
import { ListGroup } from "react-bootstrap";
export default function Sucursal(props){
    return<ListGroup.Item>
        <h4>{props.provincia}</h4>
        <span>{props.data.lugar}</span>
    </ListGroup.Item>
}