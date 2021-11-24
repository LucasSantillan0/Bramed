import React from "react";
import { ListGroup } from "react-bootstrap";
import afiliados from "../../imgs/asideBanners/banner_afiliados.png"
import mediosDePago from "../../imgs/asideBanners/banner_medios_de_pago.png"
import prestadores from "../../imgs/asideBanners/banner_prestadores.png"
import empleados from "../../imgs/asideBanners/banner_empleados.png"
import instructivo from "../../imgs/asideBanners/boton_instructivo.png"
import pagoMisCuentas from "../../imgs/asideBanners/pagomiscuentas.jpg"



export default function AcordionSide(){
    return <ListGroup className="my-4 responsiveButton">
        <h4>Instructivo</h4>
        <ListGroup.Item className ="responsiveDivButton">  
            <img src={instructivo} className="my-1 responsiveButton" />
        </ListGroup.Item >
        <h4>Accesos</h4>
        <ListGroup.Item className ="responsiveDivButton">
            <img src={afiliados}className="my-1 responsiveButton"/>
            <img src={prestadores}className="my-1 responsiveButton"/>
            <img src={empleados}className="my-1 responsiveButton"/>
        </ListGroup.Item>
        <h4>Medios de pago</h4>
        <ListGroup.Item  className ="responsiveDivButton">        
        <img src={mediosDePago}className="my-1 responsiveButton"/>
        </ListGroup.Item>
        <h4>Pago mis cuentas</h4>
        <ListGroup.Item  className ="responsiveDivButton">
        <img src={pagoMisCuentas}className="my-1 responsiveButton"/>
        </ListGroup.Item>
    </ListGroup>
}