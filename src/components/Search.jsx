import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BlogConext } from '../context/BlogContext';

const Search = () => {
  const {searchTerm, setSearchTerm} = useContext(BlogConext)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearch = () => {
    setSearchTerm(inputValue)
  }

  return (
    <div className='relative'>
        <input type="text" placeholder='Search...' 
        onChange={handleInputChange}
        className='bg-[#F4F4F5] py-2 pl-4 pr-4  focus:outline-none rounded-full'
        />
        <button>
        <FaSearch onClick={handleSearch} className='absolute right-3 top-2.5 hover:text-secondary'/>
        </button>
    </div>
  )
}

export default Search