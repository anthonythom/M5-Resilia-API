import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='divPai'>
      <div className='divTitulo'>
        <p className='tituloPrincipal'>Resilia Tattoo</p>
      </div>
      <div className="menu">
        <nav className='menuHeader'>
          <Link to="/" className='menuItens'>Home</Link>
          <Link to="/catalogo" className='menuItens'>Catálogo</Link>
          <Link to="/exclusivas" className='menuItens'>Exclusivas</Link>
          <Link to="/tatuadores" className='menuItens'>Tatuadores</Link>
          <Link to="/orcamento" className='menuItens'>Orçamento</Link>
        </nav>
      </div>
    </div>
  )
}