import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import AddBlog from './pages/blogs/addBlog/AddBlog.jsx';
import ManageBlogs from './pages/blogs/manageBlog/ManageBlogs.jsx';
import UpdateBlog from './pages/blogs/manageBlog/UpdateBlog.jsx';
import BlogDetails from './pages/blogs/BlogDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails/>
      },
      {
        path: '/add-blog',
        element: <AddBlog/>
      },
      {
        path: "/manage-blog",
        element: <ManageBlogs/>
      },
      {
        path: "/blogs/edit/:id",
        element: <UpdateBlog/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
