import { useEffect, useState } from "react"

export default function ContestCard({ contest }) {
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime()
      const start = new Date(contest.startTime).getTime()
      const diff = start - now

      if (diff <= 0) {
        setTimeLeft("Live or Ended")
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      setTimeLeft(
        `${days > 0 ? days + "d " : ""}${hours}h ${minutes}m`
      )
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000)

    return () => clearInterval(interval)
  }, [contest.startTime])

  return (
    <div className="bg-[#121218] border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition duration-300 flex flex-col justify-between">

      <div>
        <div className="flex justify-between items-start">
          <span className="text-xs px-3 py-1 rounded-full bg-[#1f1f26] text-gray-300 border border-gray-700">
            {contest.platform}
          </span>
          <span className="text-sm text-gray-400">
            {timeLeft}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-white leading-snug">
          {contest.name}
        </h3>

        <p className="mt-3 text-sm text-gray-400">
          Starts: {new Date(contest.startTime).toLocaleString()}
        </p>

        <p className="text-sm text-gray-400 mt-1">
          Duration: {contest.duration}
        </p>
      </div>

      <a
        href={contest.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-center bg-white text-black py-2.5 rounded-lg font-medium hover:opacity-90 transition"
      >
        View Contest
      </a>

    </div>
  )
}