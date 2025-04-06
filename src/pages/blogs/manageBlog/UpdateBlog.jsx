import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../addBlog/InputField';
import TextAreaField from '../addBlog/TextAreaField';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateBlog = () => {
 
  const {id} = useParams();
  // console.log(id)
  const navigate = useNavigate()
    const { register, handleSubmit,reset, setValue, formState: { errors } } = useForm();

    useEffect(()=>{
        const fetchSingleBlog = async () => {
          try {
            const response =  await axios.get(`https://meta-express-app.vercel.app/blogs/${id}`);
            // console.log(response.data.blog)
            const blog = response.data.blog
            
            setValue('title', blog?.title);
            setValue('description', blog?.description);
            setValue('authorName', blog?.author?.name);
            setValue('authorImage', blog?.author?.image);
            setValue('image', blog?.image);
          } catch (error) {
            console.log("Failed to fetch single blog", error)
          }
        } 

        fetchSingleBlog()
    }, [])


    const onSubmit = async (data) => {
      const blogData = {
          title: data.title,
          description: data.description,
          image: data.image,
          author: {
              name: data.authorName,
              image: data.authorImage
          }
      }

      try {
        const response = await axios.put(`https://meta-express-app.vercel.app/blogs/${id}`, blogData );
        console.log(response.status)
        if(response.status === 200){
          alert("Blog updated successfully")
          reset()
          navigate("/")
        }
        
      } catch (error) {
        console.log("Failed to update blog data", error)
      }
  
    };
  return (
    <div className='container max-w-7xl mx-auto px-4 py-24'>
    <h2 className='text-2xl font-bold mb-6'>Update Blog</h2>

    {/* form */}
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white max-w-3xl p-6 rounded-lg shadow-md space-y-4'>
           <InputField 
           label="Blog Title"
           id="title"
           type="text"
           register = {register("title", { required: true })}
           placeholder="Blog Title"
           />

           {/* text-are */}
           <TextAreaField
            label="Blog Description"
            id="description"
            type="text"
            register = {register("description", { required: true })}
            placeholder="Blog Description"
           />

           <InputField 
           label="Author Name"
           id="authorName"
           type="text"
           placeholder="Author Name"
           register = {register("authorName", { required: true })}
           />
           <InputField 
           label="Author Image URL"
           id="authorImage"
           type="url"
           register = {register("authorImage", { required: true })}
           placeholder="Author Image URL"
           />
           <InputField 
           label="Blog Image URL"
           id="image"
           type="url"
           register = {register("image", { required: true })}
           placeholder="Blog Image URL"
           />
            
            
            <div>
                <button
                    type='submit'
                    className='w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Update</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default UpdateBlog