import React from "react";
import { Link } from "react-router-dom";
import { Edit, DeleteForever } from '@mui/icons-material';
import axios from "axios";
import "./card.css"

export default function Card({dados}) {
	const id = dados._id

	const handleDelete = (id) => {
    axios.delete(`https://m5-tattoo.herokuapp.com/catalogo/${id}`)
      .then(resposta => {
        console.log('Usuário deletado')
				console.log(resposta)
        window.location.reload()
      })
      .catch(error => {
        console.log(error)
      })
  }

	return(
		<main>

			<div className='divPrincCard'>
			
				<div className="cardInfos">

					<div className="icones">
						<Link type="button" to="/atualiza" className="edit"><Edit />
						
						</Link><button className="delete"><DeleteForever onClick={() => handleDelete(id)} className="deleteIcon" /></button>
						
					</div>
				<div className="divImg"><img src={dados.imagem} alt="" /></div>
				<div className='nomeItem'>{dados.titulo}</div>
				<div className='descricao'>{dados.descricao}</div>
				<br></br>
				<div className='preco'>R$ {dados.preco}</div>
					<Link type="button" to="/orcamento" className="comprar">Comprar</Link>

				</div>
			</div>
		</main>
	)

}