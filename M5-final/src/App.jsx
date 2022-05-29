import React from 'react'
import './App.css'
import './Components/reset_css/reset.css'
import {
  BrowserRouter,
  Router,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import CatalogoSimples from './Pages/CatalogoSimples/CatalogoSimples';
import Galeria from './Pages/Galeria/Galeria';

function App() {

  return (
    <>
      <Route path="/">
        <Home />,
        {/* <Galeria /> */}
      </Route>
      <Route path="/catalogo">
        <CatalogoSimples />
      </Route>
    </>
  )
}

export default App
