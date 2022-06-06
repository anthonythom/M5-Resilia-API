import React from 'react'
import "./orcamento.css"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'



export default function Orcamento() {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cor, setCor] = useState('')
  const [tamanho, setTamanhoTatuagem] = useState('')
  const [largura, setLarguraTatuagem] = useState('')
  const [parteDoCorpo, setParteDoCorpo] = useState('')
  const [foto, setFoto] = useState('')
  const [mensagem, setMensagem] = useState('')

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get(`https://m5-tattoo.herokuapp.com/orcamento`)
  //     .then(resposta => {
  //       setData(resposta.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  return (
    <div className='divPai'>

      <h1>Orçamentos</h1>
    
    <h2>Atenção</h2>
    <h3>Para realizar o seu orçamento: <br />

        1°  Envie as suas ideias, se possível envie fotos de referência da arte, lembrando que quanto mais nítida e mostrando a arte sem distorções melhor <br />
        
        2°  Informe o local do corpo que pretende realizar a sua tattoo <br />
        
        3°  Meça os centímetros da arte no local desejado com uma régua <br />
        
        Informe esses dados e logo o seu orçamento será informado !!!</h3>
    <h2>Preencha o formulario abaixo</h2>
    
      <form action="" className='form-orcamento'>
        {console.log(nomeCompleto)}


        <div className="input-group-1">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="nome" onChange={(e) => setNomeCompleto(e.target.value)}/>
        </div>

        <div className="input-group-2 ">
          <label htmlFor="name">E-mail</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}
 />
        </div>

          <div className="input-group-3">
            <label htmlFor="name">Telefone</label>
            <input type="tel" id="telefone" onChange={(e) => setTelefone(e.target.value)}
 />
          </div>
        

        <div className="input-group-4">
          <p>Cores da tatuagem</p>
          <input type="radio" id="pretoebranco" name="cor_tatuagem" value="Pretoebranco" onChange={(e) => setCor(e.target.value)}
 />
          <label htmlFor="pretoebranco">Preto e branco</label>

          <input type="radio" id="colorido" name="cor_tatuagem" value="Colorido" onChange={(e) => setCor(e.target.value)}
/>
          <label htmlFor="colorido">Colorido</label>

          <input type="radio" id="outras" name="cor_tatuagem" value="Outras" onChange={(e) => setCor(e.target.value)}
/>
          <label htmlFor="outros">Outras</label>
        </div>

        <div className="input-group-5">
          <div className="Tamanho">
            <label htmlFor="name">Tamanho (cm)</label>
            <input type="number" id="tamanho" onChange={(e) => setTamanhoTatuagem(e.target.value)}
/>
          </div>
          <div className="Largura">
            <label htmlFor="name">Largura</label>
            <input type="number" id="largura" onChange={(e) => setLarguraTatuagem(e.target.value)}
 />
          </div>

        </div>
        <div className='input-group-6'>
          <label htmlFor="name">parte do corpo</label>
          <input type="text" id="text" onChange={(e) => setParteDoCorpo(e.target.value)}
 />
        </div>

        <div className='input-group-7'>
          <label htmlFor="avatar">foto</label>
          <input type="file"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg" onChange={(e) => setFoto(e.target.value)}
            />
        </div>
        <div className='input-group-8'>
        <textarea id="textarea" name="textarea" rows="5" cols="16" placeholder="Mensagem" onChange={(e) => setMensagem(e.target.value)}
></textarea>
        </div>
      </form>
    </div>
  )
}