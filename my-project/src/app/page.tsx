
import React from "react"



export default function Home() {
  return (
    <div className= "bg-white">
    <h1 className="text-3xl font-bold underline bg-white">
      <header className="text-Blue-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="0.image/logos.jpg" alt="Your Logo Description"/>

      
      <span className="ml-3 text-xl">Tarun</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About </a>
      <a className="mr-5 hover:text-gray-900">Services</a>
      <a className="mr-5 hover:text-gray-900">Contact </a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Download Brochure
    </button>
  </div>
</header>
    </h1>
 </div>
  
)}