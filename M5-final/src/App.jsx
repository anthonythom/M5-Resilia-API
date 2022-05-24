import React from 'react'
import './App.css'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import {
  BrowserRouter,
  Router,
  Route
} from "react-router-dom"; 

function App() {


  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default App
