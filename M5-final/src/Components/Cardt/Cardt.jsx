import React from "react";
import axios from "axios";
import "./cardt.css"

export default function Cardt({dados}) {
	
    return(

    <div className='divPrincCard'>
	    <div className="cardInfos"></div>
            <div className="avatar"><img src={dados.avatar} alt="" /></div>
            <div className='nome'>{dados.nome}</div>
	        <div className='telefone'>{dados.telefone}</div>
            </div>

        )

    }