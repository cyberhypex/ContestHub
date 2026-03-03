import { useEffect, useState } from "react"
import axiosInstance from "@/axios"

import ContestCard from "@/CustomComponents/ContestCard"
import { Button } from "@/components/ui/button"

export default function CFContests(){
const [contests, setContests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const res = await axiosInstance.get("/codeforces")
        setContests(res.data.data||[])
      } catch (err) {
        setError("Failed to load contests")
      } finally {
        setLoading(false)
      }
    }

    fetchContests()
  }, [])

  return (
    <div className="min-h-screen bg-[#0c0c11] text-white ">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">
        CodeForces Contests 
      </h1>

      {loading && (
        <p className="text-center text-gray-400">Loading contests...</p>
      )}

      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contests.map((contest, index) => (
            <ContestCard key={index} contest={contest} />
          ))}
        </div>
      )}
    </div>
    <div className="mt-8 mb-8  flex justify-center gap-6">
  <Button
    className="bg-[#121218] border border-gray-800 text-gray-300 
               hover:bg-[#1a1a22] hover:border-gray-600 
               hover:text-white transition duration-300 
               px-6 py-2.5 rounded-xl"
  >
    Home
  </Button>

  <Button
    className="bg-white text-black 
               hover:opacity-90 
               transition duration-300 
               px-6 py-2.5 rounded-xl"
  >
    Back
  </Button>
</div>
    </div>
  )
}