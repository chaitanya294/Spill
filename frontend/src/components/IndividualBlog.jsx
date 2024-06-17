import React from 'react'
import { useNavigate } from 'react-router-dom';

const IndividualBlog = ({blog}) => {
    const navigate = useNavigate();
    function handleEdit() {
        localStorage.setItem("blogId", blog.id);
        navigate("/editBlog");
    }
    async function handleDelete() {
        const response = await fetch("http://localhost:3000/deleteBlog", {
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify({
                blogId : blog.id
            })
        });
        navigate("/home");
    }
  return (
    <div className = "bg-zinc-100 p-3 m-2 mt-5 w-[900px] ml-[230px]">
        <div className = "font-semibold text-lg">{blog.title}</div>
        <div className = "text-sm">{blog.content}</div>
        <button onClick = {handleEdit} className = "pl-4 pt-2 pb-2 pr-4 m-2 ml-[700px] bg-pink-500 hover:bg-pink-700 rounded-lg text-white ">Edit</button>
        <button onClick = {handleDelete} className = "pl-4 pt-2 pb-2 pr-4 m-2 bg-red-500 rounded-lg text-white hover:bg-red-700">Delete</button>
    </div>
  )
}

export default IndividualBlog
