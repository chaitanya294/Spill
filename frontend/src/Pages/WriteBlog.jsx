import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const WriteBlog = () => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  function changeHeading (e) {
    setHeading(e.target.value);
  } 
  function changeContent (e) {
    setContent(e.target.value);
  }
  function changeCategory (e) {
    setCategory(e.target.value);
  }
  async function onSubmit() {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/createBlog", {
      method : "POST",
      headers : {
        'Content-Type' : "application/json",
      },
      body : JSON.stringify({
        token : token,
        title : heading,
        content : content,
        category : category,
        isAnonymous : true
      })
    });
    const data = await response.json();
    navigate("/home");
  }
  return (
    <div className = "bg-zinc-100 m-4 rounded-lg p-4">
      <div className='flex flex-row m-2'>
        <div className = "font-semibold mt-3">Enter your Title</div>
        <input onChange = {changeHeading} placeholder = "Title" className='p-3 w-[800px] ml-[200px] rounded-lg'></input>
      </div>
      <div className='flex flex-row m-2'>
        <div className = "font-semibold mt-3">Category</div>
        <input onChange = {changeCategory} placeholder = "Category" className='p-3 w-[800px] ml-[245px] rounded-lg'></input>
      </div>
      <div className = "flex flex-row m-2">
        <div className = "font-semibold mt-3">Content</div>
        <textarea onChange = {changeContent} placeholder = "Tell your story" className='p-3 w-[800px] h-[600px] ml-[253px] rounded-lg'></textarea>
      </div>
      <button onClick = {onSubmit} className = "bg-pink-500 pl-5 pt-2 pr-5 pb-2 rounded-lg text-white ml-[1050px]">Post</button>
    </div>
  )
}

export default WriteBlog
