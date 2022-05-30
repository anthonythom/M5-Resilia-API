import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Router,
  Route
} from "react-router-dom"; 
import Home from './Pages/Home/Home';
import CatalogoSimples from './Pages/CatalogoSimples/CatalogoSimples';

function App() {

  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/catalogo">
        <CatalogoSimples />
      </Route>
    </BrowserRouter>
  )
}

export default App
