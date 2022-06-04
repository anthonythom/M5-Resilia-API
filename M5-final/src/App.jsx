import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Catalogo from './Pages/Catalogo/Catalogo';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NovoItem from './Components/NovoItem/NovoItem';
import Acessorios from './Pages/Galeria/Galeria';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/catalogo">
          <Catalogo />
        </Route>
        <Route path="/acessorios">
          <Acessorios />
        </Route>
        <Route path="/cadastro">
          <NovoItem />
        </Route>
        <Footer />
    </BrowserRouter>
  )
}

export default App