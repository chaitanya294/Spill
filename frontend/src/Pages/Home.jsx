import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import Blog from "../components/Blog.jsx";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("All");
  useEffect(() => {
    async function getBlogs() {
      const response = await fetch("http://localhost:3000/Blogs", {
        method : "POST",
        headers : {
          'Content-Type' : "application/json",
        }
      });
      const data = await response.json();
      setBlogs(data.Blogs);
    }
    getBlogs();
  }, []);
  return (
    <div>
      <Navbar changeBlog = {setCategory}/>

      {blogs.map((blog) => {
        if(blog.category == category || category == "All") {
          return <Blog blog = {blog}/>
        }
      })}
    </div>
  )
}

export default Home
