export default function Footer() {
    

    return (
        <div className="bg-[#0c0c11] text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <p className="text-center text-gray-400">
                    &copy; {new Date().getFullYear()} ContestHub. All rights reserved.
                </p>
            </div>
            <div className="max-w-6xl mx-auto mt-4 flex justify-center gap-6">
               
                <a href="https://www.linkedin.com/in/anshuman-gogoi-b99671211/" target="_blank" className="text-gray-400 hover:text-white transition">
                    Contact Developer
                </a>
            </div>
        </div>
    );
}
