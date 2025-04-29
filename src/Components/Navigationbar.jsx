import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navigationbar = () => {
  return (
<div className="h-[15vh] w-full bg-white flex items-center justify-around shadow-md fixed top-0 left-0 z-50">
<div className='h-full'><img src={logo} alt="" className='h-full  bg-yellow-500 rounded-full'/></div>
        <ul className='h-full flex items-center justify-center gap-12 font-medium'>
            <li className='hover:bg-orange-500 p-1 rounded hover:text-white duration-150 ease-out'><Link to={"/"}>Home
            </Link></li>
            <li className='hover:bg-orange-500 p-1 rounded hover:text-white duration-150 ease-out'><Link to={"/aboutme"}>About Me!</Link></li>
            <li className='hover:bg-orange-500 p-1 rounded hover:text-white duration-150 ease-out'><Link to={"/Certifications"}>Certifications</Link></li>
            <li className='hover:bg-orange-500 p-1 rounded hover:text-white duration-150 ease-out'><Link to={"/skills"}>Skills</Link></li>
            <li className='hover:bg-orange-500 p-1 rounded hover:text-white duration-150 ease-out'><Link to={"/projects"}>Projects</Link></li>
            <li className='hover:bg-orange-500 p-1 rounded hover:text-white duration-150 ease-out'><Link to={"/experiance"}>Experiance</Link></li>
            <li className='hover:bg-orange-500 p-1 rounded hover:text-white duration-150 ease-out'><Link to={"/DynamicProjects"}>DynamicProjects</Link></li>
            
          
        </ul>
        <div className='flex items-center justify-center gap-5  '>
            <button className='px-2.5 py-1.5 bg-orange-500 rounded-lg text-white hover:bg-amber-500 hover:text-black'>Contact Me!</button>
            <button className='px-2.5 py-1.5 bg-orange-500 rounded-lg  text-white hover:bg-amber-500 hover:text-black'>Download CV</button>
        </div>
    </div>
  )
}

export default Navigationbar