import React, {useState, useEffect} from 'react'
import "./tatuadores.css"

import {CalendarToday, LocationCity, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";
import axios from "axios"

export default function Tatuadores() {
  const id = useParams()
  const urlapi = `https://api-adminpanel.herokuapp.com/users/tatuadores`
  const [data, setData] = useState({})
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    axios.get(urlapi)
      .then(resposta => {
        setData(resposta.data)
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  const onSubmit = async valor => {
    console.log(valor)
    console.log(data)
    const res = await axios.put(urlapi, valor)
    console.log(res)
    };


return (  
    <div className='divPrincipal'>
      <div className="divSuperior">
        <h1 className='titulo'>Tatuadores</h1>
      </div>
      <div>
       
     
        </div>
      </div>
  )
}