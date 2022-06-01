import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import CatalogoSimples from './Pages/CatalogoSimples/CatalogoSimples';
import CatalogoExclusivas from './Pages/Exclusivas/CatalogoExclusivas';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NovoItem from './Components/NovoItem/NovoItem';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/catalogo">
          <Header />
          <CatalogoSimples />
          <Footer />
        </Route>
        <Route path="/catalogo-exclusivas">
          <Header />
          <CatalogoExclusivas />
          <Footer />
        </Route>
        <Route path="/cadastro">
          <Header />
          <NovoItem />
          <Footer />
        </Route>
    </BrowserRouter>
  )
}

export default App
