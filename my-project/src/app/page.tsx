
import React from "react"
import Link from 'next/link'
import './about' 


export default function Home() {
  return (
    <div className= "bg-white">
    <h1 className="text-3xl font-bold underline bg-white treanlate-x-24">
      <header className="text-Blue-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className=" h-16 -mt-6 w-70 -translate-x-26  translate-y-4 "src="loga.jpg" alt="Your Logo Description"/>
     
      

      <span className="ml-3 text-h1 text-blue-900">Tarun</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center hover-black font-arail text-blue-900 text-base justify-center">
      
      <a className="mr-5 hover:text-gray-900">Home</a>
      
      <Link href="/about">
      <div className="mr-5 hover:text-gray-900"> About Us </div>
      </Link>
      
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