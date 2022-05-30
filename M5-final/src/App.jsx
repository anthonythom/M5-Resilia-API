import React from 'react'
import './App.css'
// import "./reset_css/reset.css"
import {
  BrowserRouter,
  Router,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import CatalogoSimples from './Pages/CatalogoSimples/CatalogoSimples';
import Card from './Components/Card/Card';

function App() {

  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
        {/* <Card /> */}
      </Route>
      <Route path="/catalogo">
        <CatalogoSimples />
      </Route>
    </BrowserRouter>
  )
}

export default App
