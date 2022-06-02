import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className='divPai'>
      <header className='divTitulo'>
        <h1 className='tituloPrincipal'>Resilia Tattoo Studio</h1>
      </header>
      <section className="menu">
        <nav className='menuHeader'>
          <Link to="/" className='menuItens'>Home</Link>
          <Link to="/catalogo" className='menuItens'>Catálogo</Link>
          <Link to="/catalogo-exclusivas" className='menuItens'>Exclusivas</Link>
          <Link to="/acessorios" className='menuItens'>Acessórios</Link>
          <Link to="/tatuadores" className='menuItens'>Tatuadores</Link>
          <Link to="/orcamento" className='menuItens'>Orçamento</Link>
        </nav>
      </section>
    </section>
  )
}