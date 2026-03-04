import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c0c11] text-white px-6">

      <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
        404
      </h1>

      <p className="mt-4 text-xl text-gray-400">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-500 text-center max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="flex gap-6 mt-10">

        <button
          onClick={() => navigate("/")}
          className="bg-white text-black px-6 py-2.5 rounded-xl 
                     hover:opacity-90 transition duration-300"
        >
          Go Home
        </button>

        <button
          onClick={() => navigate(-1)}
          className="border border-gray-600 px-6 py-2.5 rounded-xl 
                     hover:bg-gray-800 transition duration-300"
        >
          Go Back
        </button>

      </div>

    </div>
  )
}

