import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import logo from "./assets/images/logo-2.png"
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <img src={logo} alt="logo" />
    </header>
    <Canvas>
      <App />
    </Canvas>
    
  </React.StrictMode>,
)
