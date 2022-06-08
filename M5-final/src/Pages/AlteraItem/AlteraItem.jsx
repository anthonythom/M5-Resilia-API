import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import "./alteraItem.css"

export default function Cadastro() {
  const id = useParams()
  let parametros = id.itemID
  parametros = parametros.split(".")
  
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({})
  const [sucesso, setSucesso] = useState(false)

   const estilo = {
    resp: {
      display: sucesso ? "none" : "flex",
    },
    resposta: {
      display: sucesso ? "block" : "none"
    }
  }

  useEffect(() => {
      axios.get(`https://m5-tattoo.herokuapp.com/${parametros[1]}/${parametros[0]}`)
        .then(accResponse => {
          setData(accResponse.data)
        })
        .catch(erro => {
          console.log(erro)
        })
  }, [])
  
  const onSubmit = async valor => {
     for(let key in valor) {
        if(valor[key] === "") {
           valor[key] = data[key]
        }
      }
    const req = await axios.put(`https://m5-tattoo.herokuapp.com/${parametros[1]}/${parametros[0]}`, valor)
    if (req.statusText == 'OK') {
      setSucesso(true)
    }
  };

  function recarrega(){
    var btn = document.querySelector("#refresh");
    btn = location.reload()
  }


  return (
   <div className='divPrincipalCadastro'>
      <div className="cadastroContainer">
        <h1 className='tituloCadastro' style={ estilo.resp }>Alteração de cadastro</h1>

        <form action="" className='formCadastro' style={ estilo.resp } onSubmit={handleSubmit(onSubmit)}>
          <div className="containerInputsPai">
            <div className="containerInputs">
              <label htmlFor="" className='labelCadastro'>Título</label>
              <input type="text" className='inputCadastro' { ...register ('titulo') } placeholder={data.titulo}/>

              <label htmlFor="" className='labelCadastro'>Descrição</label>
              <textarea type="text" className='inputCadastro inputDesc' { ...register ('descricao') } placeholder={data.descricao}/>
            </div>

            <div className="containerInputs">
              <label htmlFor="" className='labelCadastro'>Tamanho (em cm)</label>
              <input type="text" className='inputCadastro' { ...register ('tamanho', {  pattern: /^[1-9]\d{0,2}/ }) } placeholder={data.tamanho}/>

              <label htmlFor="" className='labelCadastro'>Preço (em R$)</label>
              <input type="text" className='inputCadastro' { ...register ('preco', {  pattern: /^[1-9]\d{0,4}(\.\d{3})*,\d{2}$/ }) } placeholder={data.preco}/>

              <label htmlFor="" className='labelCadastro'>URL da Imagem</label>
              <input type="text" className='inputCadastro' { ...register ('imagem') } placeholder="https..."/>
            </div>
          </div>
              <div className="">
                <button className='btn'>Alterar</button>
              </div>
        </form>
      <div style={{justifyContent: "center", marginTop: "5rem"}}>
        <h1 className='tituloCadastro' style={estilo.resposta}>Item alterado com sucesso</h1>
        {/* <input type="button" id="refresh" {onclick="()=>recarrega"} >Adicionar mais um item </input>  */}
        
      </div>
      </div>
    </div>
  )
}
