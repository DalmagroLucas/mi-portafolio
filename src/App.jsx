import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'

function App() {
  return (
    <main style={{ backgroundColor: '#fbfbfb', minHeight: '100vh', color: 'white' }}>
      <Hero />
      <Proyectos />
    </main>
  )
}

export default App