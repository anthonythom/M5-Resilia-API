import React, { useRef, useState } from 'react'
import "./header.css"
import { Link } from "react-router-dom";

export default function Header() {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  console.log(isActive)

  return (
    <section className='divPai'>
      <header className='divTitulo'>
        <h1 className='tituloPrincipal'>Resilia Tattoo Studio</h1>
      </header>
      <section className="menu">
        <div className='menuContainer'>
          <button className='menuMobile' onClick={onClick}>Menu</button>
          <nav className={`menuHeader ${isActive ? "active" : "inactive"}`} ref={dropDownRef}>
            <Link to="/" className='menuItens'>Home</Link>
            <Link to="/catalogo" className='menuItens'>Catálogo</Link>
            <Link to="/acessorios" className='menuItens'>Acessórios</Link>
            <Link to="/tatuadores" className='menuItens'>Tatuadores</Link>
            <Link to="/orcamento" className='menuItens'>Orçamento</Link>
          </nav>
        </div>
      </section>
    </section>
  )
}