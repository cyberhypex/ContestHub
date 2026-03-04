import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Codeforces", path: "/codeforces" },
    { name: "CodeChef", path: "/codechef" },
    { name: "LeetCode", path: "/leetcode" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c11]/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-white text-xl font-semibold tracking-wide">
          ContestHub
        </div>

        <ul className="hidden md:flex items-center gap-10 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>

              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-6 bg-[#121218] font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  )
}