import React from "react";
import { Link } from "react-router-dom";
import "./card.css"

export default function Card({dados}) {
	return(
		<main>
			<div className='divPrincCard'>
				<div className="cardInfos">
				<div className="divImg"><img src={dados.imagem} alt="" /></div>
				<div className='nomeItem'>{dados.titulo}</div>
				<div className='descricao'>{dados.descricao}</div>
				<div className='preco'>R$ {dados.preco}</div>
					<Link type="button" to="/orcamento" className="comprar">Comprar</Link>
				</div>
			</div>
		</main>
	)
}


