
import './App.css'
import { Button } from "@/components/ui/button"
import NavBar from './Pages/NavBar'
import LandingPage from './Pages/LandingPage'
import Footer from './Pages/Footer'
import Layout from './Layout'
import { BrowserRouter, Outlet, Route ,Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  )
}

export default App
