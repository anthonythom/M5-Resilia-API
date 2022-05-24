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
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/catalogo">
        <CatalogoSimples />
      </Route>
    </div>
  )
}

export default App
