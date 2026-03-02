import { useState } from "react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c11]/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white text-xl font-semibold tracking-wide">
          ContestHub
        </div>

        <ul className="hidden md:flex items-center gap-10 text-gray-400 font-medium">
          {["Home", "Codeforces", "CodeChef", "LeetCode"].map((item) => (
            <li key={item} className="relative cursor-pointer group">
              <span className="group-hover:text-white transition duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
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
        <ul className="flex flex-col px-6 py-6 gap-6 bg-[#121218] text-gray-400 font-medium">
          {["Home", "Codeforces", "CodeChef", "LeetCode"].map((item) => (
            <li key={item} className="hover:text-white transition duration-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}