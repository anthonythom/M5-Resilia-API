import React from "react";
import "./orcamento.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Orcamento() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cor, setCor] = useState("");
  const [tamanho, setTamanhoTatuagem] = useState("");
  const [largura, setLarguraTatuagem] = useState("");
  const [parteDoCorpo, setParteDoCorpo] = useState("");
  const [foto, setFoto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://m5-tattoo.herokuapp.com/orcamento`)
      .then(resposta => {
        setData(resposta.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return ( 
   
    
    <div className='divPrincipalCadastro'>
    <div className="formOrcamento">
      <h1 className='tituloCadastro' >Preencha o formulário</h1>
    
      <form action="" className='formCadastro' >
        <div className="containerInputsPai">
          <div className="containerInputs">
            <label htmlFor="" className='labelCadastro'>Nome Completo</label>
            <input type="text" className='inputCadastro'placeholder="Nome"
             onChange={(e) => setNomeCompleto(e.target.value)}/>
    
            <label htmlFor="" className='labelCadastro'>E-mail</label>
            <input type="mail" className='inputCadastro'placeholder="E-mail"
             onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="" className='labelCadastro'>Telefone</label>
            <input type="tel" className='inputCadastro'placeholder="Telefone"
             onChange={(e) => setTelefone(e.target.value)}/>
    
            <label htmlFor="" className='labelCadastro'>Descrição da tatuagem</label>
            <textarea type="text" className='inputCadastro inputDesc'placeholder="Descrição detalhada"
             onChange={(e) => setMensagem(e.target.value)}/>
          </div>
    
          <div className="containerInputs">
            <label htmlFor="" className='labelCadastro'>Tamanho (em cm)</label>
            <input type="text" className='inputCadastro'placeholder="15" 
            onChange={(e) => setTamanhoTatuagem(e.target.value)}/>
    
            <label htmlFor="" className='labelCadastro'>Largura (em cm)</label>
            <input type="text" className='inputCadastro'placeholder="45"
             onChange={(e) => setLarguraTatuagem(e.target.value)}/>

            <label htmlFor="" className='labelCadastro'>Parte do corpo</label>
            <input type="text" className='inputCadastro'placeholder="45"
             onChange={(e) => setParteDoCorpo(e.target.value)}/>
    
            <div className="labelCadastro">
      <label htmlFor="foto">Envie sua foto</label>
      <input
        type="file"
        id="fotoTatuagem"
        name="fotoTatuagem"
        accept="image/png, image/jpeg"
        onChange={(e) => setFoto(e.target.value)}
      />
    </div>
    
            <label htmlFor="" className='labelCadastro'></label>
            <select name="" id="" className='inputCadastro' onChange={(e) => setCor(e.target.value)}>
              <option value="">Cor da tatuagem </option>
              <option value="1">Colorido</option>
              <option value="2">Preto e branco</option>
              <option value="3">Outros</option>
            </select>
          </div>
        </div>
            <div className="">
              <button className='btn'>Enviar</button>
            </div>
      </form>
    
    </div>
    </div>
    
  );
}
