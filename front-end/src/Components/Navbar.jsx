import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                <Link to="#" className="text-white text-xl font-bold">Logo</Link>
                </div>
                <div className="flex items-center">
                <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-white'} text-white mr-4 hover:text-gray-300`}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-white'} text-white mr-4 hover:text-gray-300`}>About</NavLink>
                <NavLink to="/courses" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-white'} text-white mr-4 hover:text-gray-300`}>Courses</NavLink>
                <NavLink to="/services" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-white'} text-white mr-4 hover:text-gray-300`}>Services</NavLink>
                <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-white'} text-white hover:text-gray-300`}>Contact</NavLink>
                </div>
            </div>
        </nav>
  )
}

export default Navbar