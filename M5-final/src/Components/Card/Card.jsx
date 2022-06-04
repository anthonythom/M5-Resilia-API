import React from "react";
import { Link } from "react-router-dom";
import "./card.css"

export default function Card({dados}) {
	return(
		<main>
			<div className='divPrincCard'>
				<div className="cardInfos">
				<div className="divImg"><img src={dados.IMAGEM} alt="" /></div>
				<div className='nomeItem'>{dados.TITULO}</div>
				<div className='nomeItem'>{dados.LOCAL}</div>
				<div className='descricao'>{dados.DESCRICAO}</div>
				<div className='preco'>R$ {dados.PRECO}</div>
				<Link type="button" to="/orcamento" className="comprar">Comprar</Link>
					
				</div>
				
			</div>
		</main>
	)
}


