import React, { useState, useEffect } from 'react'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Blog = ({blog}) => {
  const [Like, setLike] = useState(blog.like);
  async function handleLike(){
    setLike((Like) => Like+1);
    const response = await fetch("http://localhost:3000/likes", {
      method : "POST",
      headers : {
        'Content-Type' : "application/json",
      },
      body : JSON.stringify({
          blogId : blog.id
      })
    })
  };
  return (
    <div className = "mt-4 ml-[200px] w-[900px] bg-zinc-100 p-3">
      <div className = "font-bold text-lg">{blog.title}</div>
      <div className = "font-light mt-2 ">{blog.content}</div>
      <div className = "mt-2">
        <button onClick = {handleLike}><FavoriteBorderIcon/> {Like}</button>
      </div>
    </div>
  )
}

export default Blog
