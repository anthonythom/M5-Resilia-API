import React from "react";
import "./orcamento.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Orcamento() {
  return ( 
   
    
    <div className='divPrincipalOrcamento'>
    <div className="formOrcamento">
      <h1 className='tituloCadastro' >Preencha o formulário</h1>
    
      <form action="" className='formCadastroOrcamento' >
        <div className="orcamentoInputPai">
          <div className="orcamentoInput">
            <label htmlFor="" className='labelCadastroOrcamento'>Nome Completo</label>
            <input type="text" className='inputCadastro'placeholder="Nome" />
    
            <label htmlFor="" className='labelCadastroOrcamento'>E-mail</label>
            <input type="mail" className='inputCadastro'placeholder="E-mail" />

            <label htmlFor="" className='labelCadastroOrcamento'>Telefone</label>
            <input type="tel" className='inputCadastro'placeholder="Telefone" />
    
            <label htmlFor="" className='labelCadastroOrcamento'>Descrição da tatuagem</label>
            <textarea type="text" className='inputCadastro inputDesc'placeholder="Descrição detalhada" />
          </div>
    
          <div className="orcamentoInput">
            <label htmlFor="" className='labelCadastroOrcamento'>Tamanho (em cm)</label>
            <input type="text" className='inputCadastro'placeholder="15" />
    
            <label htmlFor="" className='labelCadastroOrcamento'>Largura (em cm)</label>
            <input type="text" className='inputCadastro'placeholder="45" />

            <label htmlFor="" className='labelCadastroOrcamento'>Parte do corpo</label>
            <input type="text" className='inputCadastro'placeholder="Antebraço, costelas, etc" />
    
            <div className="labelCadastroOrcamento">
              <label htmlFor="foto">Envie sua foto</label>
              <input
                type="file"
                id="fotoTatuagem"
                name="fotoTatuagem"
                accept="image/png, image/jpeg"
              />
            </div>
            <label htmlFor="" className='labelCadastroOrcamento'></label>
            <select name="" id="" className='inputCadastro'>
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
