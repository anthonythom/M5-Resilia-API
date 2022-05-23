import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default App
