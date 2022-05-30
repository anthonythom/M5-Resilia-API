import React from "react";
import { Link } from "react-router-dom";
import "./card.css"

export default function Card({dados}) {
	return (
			<main>
				<div className='divPrincCard'>
					<div className="cardImg">
						<div className="divImg"><img src={dados.IMAGEM} alt="" /></div>
      		</div>
      		<div className="cardInfos">
						<div className='nomeProduto'>{dados.TITULO}</div>
						<div className='precoAntigo'>R$ {dados.PRECO}</div>
						<Link to="/orcamento" className="comprar">Comprar</Link>
						<button className="comprar">Comprar</button>
      		</div>
   			</div>
			</main>
	)
}