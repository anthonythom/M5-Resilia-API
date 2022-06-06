import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import "./alteraItem.css"

export default function Cadastro() {
  const { register, handleSubmit } = useForm();
  const [sucesso, setSucesso] = useState(false)
  const [tipo, setTipo] = useState("")
  const [rota, setRota] = useState("")

   const estilo = {
    resp: {
      display: sucesso ? "none" : "flex",
    },
    resposta: {
      display: sucesso ? "block" : "none"
    }
  }

  useEffect(() => {
     if (tipo == 1) {
      setRota("catalogo")
    } else {
      setRota("acessorios")
    }
  }, [tipo])
  
  const onSubmit = async data =>  {
    console.log(data)
    const req = await axios.post(`https://m5-tattoo.herokuapp.com/${rota}`, data)
    console.log(req.statusText)
    if (req.statusText == 'Created') {
      setSucesso(true)
    }
    setSucesso(true)
  };

  return (
   <div className='divPrincipalCadastro'>
      <div className="cadastroContainer">
        <h1 className='tituloCadastro' style={ estilo.resp }>Alteração de cadastro</h1>

        <form action="" className='formCadastro' style={ estilo.resp } onSubmit={handleSubmit(onSubmit)}>
          <div className="containerInputsPai">
            <div className="containerInputs">
              <label htmlFor="" className='labelCadastro'>Título</label>
              <input type="text" className='inputCadastro' { ...register ('titulo', { required: true, pattern: /([\s\S]+?(?=\b[a-z][)]|$))/ }) } placeholder="Nome"/>

              <label htmlFor="" className='labelCadastro'>Descrição</label>
              <textarea type="text" className='inputCadastro inputDesc' { ...register ('descricao', { required: true, pattern: /([\s\S]+?(?=\b[a-z][)]|$))/ }) } placeholder="Descrição detalhada"/>
            </div>

            <div className="containerInputs">
              <label htmlFor="" className='labelCadastro'>Tamanho (em cm)</label>
              <input type="text" className='inputCadastro' { ...register ('tamanho', { required: true, pattern: /^[1-9]\d{0,2}/ }) } placeholder="15"/>

              <label htmlFor="" className='labelCadastro'>Preço (em R$)</label>
              <input type="text" className='inputCadastro' { ...register ('preco', { required: true, pattern: /^[1-9]\d{0,4}(\.\d{3})*,\d{2}$/ }) } placeholder="199,90"/>

              <label htmlFor="" className='labelCadastro'>URL da Imagem</label>
              <input type="text" className='inputCadastro' { ...register ('imagem', { required: true }) } placeholder="https..."/>

              <label htmlFor="" className='labelCadastro'>Informe o tipo de item</label>
              <select name="" id="" className='inputCadastro' onChange={(e) => setTipo(e.target.value)}>
                <option value=""></option>
                <option value="1">Tatuagem</option>
                <option value="2">Acessório</option>
              </select>
            </div>
          </div>
              <div className="">
                <button className='btn'>Cadastrar</button>
              </div>
        </form>
      <div style={{justifyContent: "center", marginTop: "5rem"}}>
        <h1 className='tituloCadastro' style={estilo.resposta}>Item alterado com sucesso</h1>
      </div>
      </div>
    </div>
  )
}
