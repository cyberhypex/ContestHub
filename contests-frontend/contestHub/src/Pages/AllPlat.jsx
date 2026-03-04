import Card from "@/CustomComponents/Card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"  

export default function AllPlat() {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-[#0c0c11] text-white  flex flex-col items-center">

      <h1 className="text-3xl font-bold mb-12">
        Available Platforms
      </h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl px-6">

        <Card
          title="Codeforces"
          description="Browse upcoming Codeforces contests including Div.1, Div.2 and Educational rounds."
          url="/codeforces"
        />

        <Card
          title="CodeChef"
          description="Stay updated with CodeChef Starters and other competitive programming contests."
          url="/codechef"
        />

        <Card
          title="LeetCode"
          description="Track weekly and biweekly LeetCode contests and improve your problem solving."
          url="/leetcode"
        />

      </div>
      <div className="mt-8 mb-8  flex justify-center gap-6">
  <Button
    onClick={()=>navigate("/")}
    className="bg-[#121218] border border-gray-800 text-gray-300 
               hover:bg-[#1a1a22] hover:border-gray-600 
               hover:text-white transition duration-300 
               px-6 py-2.5 rounded-xl"
  >
    Home
  </Button>

  <Button
    onClick={()=>navigate(-1)}
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