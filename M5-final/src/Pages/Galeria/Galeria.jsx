import React from 'react'
import "./galeria.css"
import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../../Components/Card/Card'

export default function Acessorios() {
  const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://m5-tattoo.herokuapp.com/acessorios`)
            .then(resposta => {
                console.log(resposta)
                setData(resposta.data.acessorios)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    console.log(data)

    return(  
        <div className='divPrincipal'>
            <div className="divImagem">
                <h1 className='titulo'>Acessórios</h1>
            </div>
        <div>
        <Link type="button" to="/cadastro" className='btnAdd'>+</Link>
            <div className='listaAcessorios'>
                {data.map((data, index) => (
                     <div key={index}>
                        <Card dados={data}/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
