import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'

import CCContests from './Pages/CCContests'
import CFContests from './Pages/CFContests'
import LCContests from './Pages/LCContests'
import LandingPage from './Pages/LandingPage'
import AllPlat from './Pages/AllPlat'
import NotFound from './Pages/NotFound'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="codechef" element={<CCContests />} />
          <Route path="codeforces" element={<CFContests />} />
          <Route path="leetcode" element={<LCContests />} />
          <Route path="/all" element={<AllPlat />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

