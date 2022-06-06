import React from "react";
import axios from "axios";
import "./cardt.css"

export default function Cardt({dados}) {
	
    return(

    <div className='divPrincCard'>
	    <div className="cardInfos"></div>
            <div className="avatar"><img src={dados.imagem} alt="" /></div>
            <div className='nome'>{dados.titulo}</div>
	        <div className='telefone'>{dados.descricao}</div>
            </div>

        )

    }