import React, {useEffect, useState} from 'react'
import IndividualBlog from '../components/IndividualBlog';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const MyBlog = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getMyBlogs() {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/getBlogs", {
        method : "POST",
        headers : {
          'Content-Type' : "application/json",
        },
        body : JSON.stringify({
          token : token
        })
      });
      const data = await response.json();
      // console.log(data.Blogs);
      setMyBlogs(data.Blogs);
    }
    getMyBlogs();
  }, []);
  function ToHome() {
    navigate("/home");
  }
  return (
    <div>
      <div>
        <div className = "flex flex-row">
          <button className = "p-5" onClick = {ToHome}>
            <ArrowBackIosIcon/>
          </button>
          <div className = "text-2xl ml-[520px] p-5">My Blogs</div>
        </div>
      </div>
      {myBlogs.map((blog) => {
        return <IndividualBlog blog = {blog}/>
      })}
    </div>
  )
}

export default MyBlog
