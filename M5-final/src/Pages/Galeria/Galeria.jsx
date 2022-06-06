import React from 'react'
import "./galeria.css"
import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../../Components/Card/Card'
import { Link } from "react-router-dom";

export default function Acessorios() {
  const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://m5-tattoo.herokuapp.com/acessorios`)
            .then(resposta => {
                setData(resposta.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

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
                        <Card dados={data} type="acessorios"/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
