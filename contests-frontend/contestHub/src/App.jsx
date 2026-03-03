import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import NavBar from './Pages/NavBar'
import LandingPage from './Pages/LandingPage'
import Footer from './Pages/Footer'

function App() {
  return (
    <>
    <NavBar />
     <LandingPage />
     <Footer />
    </>
     
    
  )
}

export default App
