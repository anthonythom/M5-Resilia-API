import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"; 
import cors from "cors";

// ReactDOM.createRoot(document.getElementById('root')).render(
  const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

app.use(cors());