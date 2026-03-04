
import './App.css'
import { Button } from "@/components/ui/button"
import NavBar from './Pages/NavBar'
import LandingPage from './Pages/LandingPage'
import Footer from './Pages/Footer'
import Layout from './Layout'
import { BrowserRouter, Outlet, Route ,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <div className="min-h-screen bg-[#0c0c11] text-white flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28">
      <Outlet />
      </main>
   
     
      <Footer />
      </div>
    </>
  )
}

export default App
