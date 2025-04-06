import React, { createContext, useState } from 'react'

export const BlogConext = createContext()

export const BlogProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("")
  return (
    <BlogConext.Provider value={{searchTerm, setSearchTerm}}>{children}</BlogConext.Provider>
  )
}
