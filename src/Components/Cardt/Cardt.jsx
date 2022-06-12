import React from "react";
import axios from "axios";
import "./cardt.css"

export default function Cardt({dados}) {
	
    return(

    <div className='divPrincCard'>
	    <div className="cardInfos">
            <div className="avatar"><img src={dados.avatar} alt="" /></div>
            <div className='nome'>{dados.nome}</div>
            <h1>Telefone</h1>
	        <div className='telefone'>{dados.telefone}</div>
            </div>
            </div>
        )

    }