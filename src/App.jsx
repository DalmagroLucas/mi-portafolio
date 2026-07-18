import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'

function App() {
  return (
    <main>
      <Hero />
      <Proyectos />
    </main>
  )
}

export default App