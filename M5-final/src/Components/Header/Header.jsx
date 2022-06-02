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