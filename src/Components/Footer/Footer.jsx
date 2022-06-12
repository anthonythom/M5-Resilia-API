import React from 'react'
import "./footer.css"
import {Facebook, Instagram, Twitter} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <footer className='divFooter'>
        <div className='divFooterTitulo'>
          <Link to="/" className='divFooterTitulo'>
            <h1 className='tituloFooter'>Resilia Tattoo Studio</h1>
          </Link>
        </div>
        <div className='divTextoFooter'>
          <h3 className='footerTexto'>Todos os direitos reservados ©</h3>
          <h3 className='footerTexto'>Endereço do Studio</h3>
        </div>
        <div className="divRedesSociais">
          <div className='iconesRedes'><Facebook fontSize='large'/></div>
          <div className='iconesRedes'><Instagram fontSize='large'/></div>
          <div className='iconesRedes'><Twitter fontSize='large'/></div>
        </div>
      </footer>
  )
}