import { useState } from 'react'
import '../CSS/App.css'
import { ServicesApp } from './components/servicios'

function App() {

  return (
    <ServicesApp
      name="Servicios"
    >
      <h2>Contenido</h2>
      <p>Este es el contenido de la página de servicios</p>
    </ServicesApp>
  )
}

export default App
