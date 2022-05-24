import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='divPai'>
      <div className='divTitulo'>
        <p className='tituloPrincipal'>Resilia Tattoo</p>
      </div>
      <div className="menu">
        <ul className='menuHeader'>
          <li className='menuItens'>Home</li>
          <li className='menuItens'>Catálogo</li>
          <li className='menuItens'>Exclusivas</li>
          <li className='menuItens'>Tatuadores</li>
          <li className='menuItens'>Orçamento</li>
        </ul>
      </div>
      <div className='background'></div>
    </div>
  )
}