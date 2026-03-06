import { NavLink } from "react-router";

export default function LandingPage() {
  return (
    <div className=" bg-[#0c0c11] text-white pt-24">

      <section className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          All Coding Contests.
          <br />
          <span className="text-gray-400">One Powerful Hub.</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Track upcoming and live contests from Codeforces, CodeChef and LeetCode in one clean, distraction-free dashboard.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
            <NavLink to="/all">Explore Contests</NavLink>
          </button>
          
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-28 grid md:grid-cols-3 gap-8">
        <div className="bg-[#121218] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
          <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
          <p className="text-gray-400">
            Stay ahead with accurate contest timings and instant updates across platforms.
          </p>
        </div>

        <div className="bg-[#121218] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
          <h3 className="text-xl font-semibold mb-4">Platform Filtering</h3>
          <p className="text-gray-400">
            View contests by platform and focus only on what matters to you.
          </p>
        </div>
        
        <div className="bg-[#121218] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
          <h3 className="text-xl font-semibold mb-4">Minimal & Focused</h3>
          <p className="text-gray-400">
            A distraction-free interface built for competitive programmers.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-28 mb-20 text-center">
        <h2 className="text-3xl font-semibold">
          Never miss a contest again.
        </h2>
        <p className="mt-4 text-gray-400">
          Your competitive programming journey, streamlined.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-6 mt-12 mb-20 text-center">
        <h2 className="text-3xl font-semibold">
          Built with ❤️ by <a href="https://www.linkedin.com/in/anshuman-gogoi-b99671211/" target="_blank" className="text-blue-400 hover:underline">Anshuman Gogoi</a>
        </h2>
        <br />
        <p className="mt-4 text-gray-400"> Special thanks to <a href="https://github.com/Mihir2423" target="_blank" className="text-blue-400 hover:underline">Mihir2423 </a> for the backend API</p>
        </section>

    </div>
  )
}

