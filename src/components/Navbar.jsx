import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {darkMode, setDarkMode} = useContext(ThemeContext)
   console.log(darkMode)

    const toggleMobileMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    // use context here instead
    // const [isDarkMode, setIsDarkMode] = useState(false)
    // const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

    return (
        <nav className='bg-white shadow-md'>
            {/* desktop menu and mobile button */}
            <div className='container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-4'>
                {/* logo */}
                <div>
                    <a href="/">
                        <img src="/logo.png" alt="logo" />
                    </a>
                </div>

                {/* menu items */}
                <ul className='md:flex hidden space-x-8 text-gray-700 font-medium'>
                    <li>
                        <NavLink to="/"
                            className={
                                ({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs"
                            className={
                                ({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"
                            }
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                            className={
                                ({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"
                            className={
                                ({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* search and color toggle */}
                <div className='md:flex hidden items-center space-x-4'>
                    {/* search */}
                    <Search />
                    {/* color switcher */}
                    <div className={`w-14 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${darkMode ? "justify-end" : "justify-start"}`}>
                        <button onClick={() => setDarkMode((darkMode) => !darkMode)} className='w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300'>
                            {
                                darkMode ? <FaMoon className='text-gray-500' /> : <FaSun className='text-yellow-500' />
                            }
                        </button>
                    </div>
                </div>

                {/* mobile menu bar */}
                <div className='md:hidden block'>
                    <button onClick={toggleMobileMenu}>
                        {
                            isMenuOpen ?  <IoMdClose className='size-6 text-gray-600'/> : <HiMiniBars3BottomRight className='size-6 text-gray-600'/>
                        }
                    </button>
                </div>
            </div>

            {/* mobile menu items */}
            {
                isMenuOpen && (<div className='md:hidden bg-white shadow-md'>
                    <ul className='flex flex-col items-center space-y-4 text-gray-700 py-4'>
                    <li onClick={toggleMobileMenu}>
                        <NavLink to="/"
                            className={
                                ({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li onClick={toggleMobileMenu}>
                        <NavLink to="/blogs"
                            className={
                                ({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"
                            }
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li onClick={toggleMobileMenu}>
                        <NavLink to="/about"
                            className={
                                ({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li onClick={toggleMobileMenu}>
                        <NavLink to="/contact"
                            className={
                                ({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <Search/>
                    </ul>
                    
                </div>)
            }
        </nav>
    )
}

export default Navbar