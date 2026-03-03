import { Outlet } from "react-router-dom"
import NavBar from "./Pages/NavBar"
import Footer from "./Pages/Footer"

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0c0c11] text-white flex flex-col">
      <NavBar />
      <main className="grow pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}