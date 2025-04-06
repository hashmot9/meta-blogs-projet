import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

import bannerImg from "../assets/blogs/blog-0.png"
import authorImg from "../assets/author.png"

const Banner = () => {
    return (
        <div className='my-16'>
            <div className='text-center mb-8'>
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} 
                    
                    className='text-4xl font-semibold mb-4'
                    >
                        Meta Blog
            </motion.h1>
                <motion.ul 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} 
                className='flex flex-wrap items-center justify-center gap-4'>
                    <li>
                        <Link to="/" className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-4'>Home</Link>
                    </li>
                    <li>
                        <Link to="/add-blog" className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-4'>Add New Blog</Link>
                    </li>
                    <li>
                        <Link to="/manage-blog" className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-4'>Manage Blog</Link>
                    </li>
                </motion.ul>
            </div>

            {/* banner image */}
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} 
            className='text-white'>
                <div className='md:min-h-[450px] h-80 w-full bg-center bg-cover bg-no-repeat rounded-md' style={{ backgroundImage: `url(${bannerImg})` }}>
                    <div className='flex flex-col h-full justify-end p-5'>
                        <span className='bg-secondary text-center max-w-36 px-4 py-1 rounded-md mb-3'>Technology</span>
                        <h2 className='sm:text-3xl text-2xl font-semibold md:w-1/2 mb-5'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        <div className='flex items-center gap-1'>
                            <img src={authorImg} alt="" className='size-8' />
                            <div className='flex flex-wrap items-center space-x-4'>
                                <span className='ml-2 text-base cursor-pointer hover:underline underline-offset-2'>Tracey Wilson</span>
                                <span className='text-sm italic'>August 20, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Banner