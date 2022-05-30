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
						<div className='nomeItem'>{dados.TITULO}</div>
						<div className='preco'>R$ {dados.PRECO}</div>
						<Link to="/orcamento" className="comprar"><button className="comprar">Comprar</button></Link>
      		</div>
   			</div>
			</main>
	)
}