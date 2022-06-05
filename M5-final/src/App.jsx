import React from 'react'
import './reset_css/reset.css'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Catalogo from './Pages/Catalogo/Catalogo';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NovoItem from './Components/NovoItem/NovoItem';
import Acessorios from './Pages/Galeria/Galeria';
import Tatuadores from './Pages/Tatuadores/Tatuadores';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/catalogo">
          <Catalogo />
        </Route>

        <Route path="/acessorios">
          <Acessorios />
        </Route>

        <Route path="/tatuadores">
          <Tatuadores />
        </Route>



        <Route path="/cadastro">
          <NovoItem />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App