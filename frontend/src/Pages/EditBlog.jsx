import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
const EditBlog = () => {
    const [Heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [blog, setBlog] = useState({});
    useEffect(() => {
        async function main() {
            const response = await fetch("http://localhost:3000/getUserBlog", {
                method : "POST",
                headers : {
                    'Content-Type' : "application/json"
                },
                body : JSON.stringify({
                    blogId : localStorage.getItem("blogId")
                })
            });
            const data = await response.json();
            setBlog(data);
            setHeading(data.title);
            setContent(data.content);
            setCategory(data.category);
        }
        main();
    }, []);
    const navigate = useNavigate();
    function handleReturn() {
        navigate("/home");
    }
    function changeHeading(e) {
      setHeading(e.target.value);
    }
    function changeCategory(e) {
      setCategory(e.target.value);
    }
    function changeContent(e) {
      setContent(e.target.value);
    }
    async function onSubmit() {
        const response = await fetch("http://localhost:3000/updateBlog", {
          method : "POST",
          headers : {
            'Content-Type' : "application/json"
          },
          body : JSON.stringify({
            title : Heading,
            content : content,
            category : category,
            blogId : localStorage.getItem("blogId")
          })
        });
        navigate("/home");
    }
  return (
    <>
    <div className = "flex flex-row">
        <button className = "pl-4" onClick = {handleReturn}>
            <ArrowBackIosIcon/>
        </button>
        <div className='font-bold text-lg ml-[620px] pt-2'>Edit Blog</div>
    </div>
    <div className = "bg-zinc-100 m-4 rounded-lg p-4">
      <div className='flex flex-row m-2'>
        <div className = "font-semibold mt-3">Enter your Title</div>
        <input onChange = {changeHeading} defaultValue={blog.title} placeholder = "Title" className='p-3 w-[800px] ml-[200px] rounded-lg'></input>
      </div>
      <div className='flex flex-row m-2'>
        <div className = "font-semibold mt-3">Category</div>
        <input onChange = {changeCategory} defaultValue = {blog.category} placeholder = "Category" className='p-3 w-[800px] ml-[245px] rounded-lg'></input>
      </div>
      <div className = "flex flex-row m-2">
        <div className = "font-semibold mt-3">Content</div>
        <textarea onChange = {changeContent} defaultValue = {blog.content} placeholder = "Tell your story" className='p-3 w-[800px] h-[500px] ml-[253px] rounded-lg'></textarea>
      </div>
      <button onClick = {onSubmit} className = "bg-pink-500 pl-5 pt-2 pr-5 pb-2 rounded-lg text-white ml-[1050px]">Post</button>
    </div>
    </>
  )
}

export default EditBlog
