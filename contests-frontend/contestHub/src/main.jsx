import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import { CFContests } from './Pages/CFContests'
import { Card } from './components/ui/card'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/codeforces" element={<CFContests />} />
      <Route path="/card" element={<Card />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
)

