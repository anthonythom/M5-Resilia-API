import React from 'react'
import "./exclusivas.css"
import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../../Components/Card/Card'

export default function CatalogoExclusivas() {
  const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://tattooresilia.herokuapp.com/catalogo-exclusivas`)
            .then(resposta => {
                setData(resposta.data.exclusivas)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    console.log(data)

    return(  
        <div className='divPrincipal'>
            <div className="divSuperior">
                <h1 className='titulo'>exclusivas</h1>
            </div>
        <div>
            <div className='listaTattoo'>
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
