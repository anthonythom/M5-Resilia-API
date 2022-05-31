import React, {useState, useEffect} from 'react'
import "./novoItem.css"
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function NovoItem() {
  const { register, handleSubmit } = useForm();
  const [sucesso, setSucesso] = useState(false)
  const [tipo, setTipo] = useState("")
  const [rota, setRota] = useState("")

  useEffect(() => {
     if (tipo == 1) {
      setRota("catalogo-exclusivas")
    } else if (tipo == 2) {
      setRota("catalogo")
    } else {
      setRota("acessorios")
    }
  }, [tipo])

  const onSubmit = async (data) =>  {
    // const req = await axios.post(`https://tattooresilia.herokuapp.com/${rota}`)
    // console.log(data)
    console.log(tipo)
    console.log(rota)
    setSucesso(true)
  };

  return (
    <div className='divPrincipalCadastro'>
      <div className="cadastroContainer">
        <h1 className='tituloCadastro'>Cadastro de novo item</h1>

        <form action="" className='formCadastro' onSubmit={handleSubmit(onSubmit)}>
          <div className="containerInputs">
            <label htmlFor="" className='labelCadastro'>Título</label>
            <input type="text" className='inputCadastro' { ...register ('TITULO', { required: true, pattern: /([\s\S]+?(?=\b[a-z][)]|$))/ }) } placeholder="Nome"/>

            <label htmlFor="" className='labelCadastro'>Descrição</label>
            <textarea type="text" className='inputCadastro inputDesc' { ...register ('DESCRICAO', { required: true, pattern: /([\s\S]+?(?=\b[a-z][)]|$))/ }) } placeholder="Descrição detalhada"/>
          </div>

          <div className="containerInputs">
            <label htmlFor="" className='labelCadastro'>Tamanho (em cm)</label>
            <input type="text" className='inputCadastro' { ...register ('TAMANHO', { required: true, pattern: /^[1-9]\d{0,2}/ }) } placeholder="15"/>

            <label htmlFor="" className='labelCadastro'>Preço (em R$)</label>
            <input type="text" className='inputCadastro' { ...register ('PRECO', { required: true, pattern: /^[1-9]\d{0,2}(\.\d{3})*,\d{2}$/ }) } placeholder="199,90"/>

            <label htmlFor="" className='labelCadastro'>Informe o tipo de item</label>
            <select name="" id="" className='inputCadastro' onChange={(e) => setTipo(e.target.value)}>
              <option value=""></option>
              <option value="1">Tatuagem Exclusiva</option>
              <option value="2">Tatuagem Simples</option>
              <option value="3">Acessório</option>
            </select>
            <button className='btn'>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
