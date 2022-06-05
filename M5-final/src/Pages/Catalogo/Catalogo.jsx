import React from 'react'
import "./catalogo.css"
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import Card from '../../Components/Card/Card'

export default function Catalogo() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://m5-tattoo.herokuapp.com/catalogo`)
      .then(resposta => {
        setData(resposta.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (  
    <div className='divPrincipal'>
      <div className="divSuperior">
        <h1 className='titulo'>catalogo</h1>
      </div>
      <div>
       
     	  <Link type="button" to="/cadastro" className='btnAdd'>+</Link>
      				
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