import React from "react";
import btn1 from "../../imgs/topButtons/btn_comecor.png"
import btn2 from "../../imgs/topButtons/btn_cosalud.png"
import btn3 from "../../imgs/topButtons/btn_femegrecor.png"

export default function PlanesImg (){
    return <div className="onlyMonitor">
        <img src={btn1} className="responsiveButton" style={{margin:" 30px 30px 30px 0"}}></img>
        <img src={btn2} className="responsiveButton"style={{margin:"30px"}}></img>
        <img src={btn3} className="responsiveButton"style={{margin:"30px 0 30px 30px"}}></img>
    </div>
}