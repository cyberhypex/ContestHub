import { useNavigate } from "react-router-dom"

export default function Card({ title, description, url }) {
  const navigate = useNavigate()

  return (
    <div className="bg-[#121218] border border-gray-800 rounded-2xl p-8 flex flex-col justify-between hover:border-gray-600 transition duration-300">

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">
          {title}
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <button
        onClick={() => navigate(url)}
        className="mt-8 bg-white text-black py-2.5 rounded-lg font-medium hover:opacity-90 transition"
      >
        View Contests
      </button>

    </div>
  )
}