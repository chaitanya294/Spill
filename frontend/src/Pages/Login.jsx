import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import Logo from "./Logo.jpg"
import Signup from "./Signup"

const Login = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        localStorage.clear();
    }, []);
    function handleClick () {
        setShowModal(!showModal);
    }
    function ToHome(){
        navigate("/home");
    }
    function handleUserNameChange(e) {
        setUserName(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    async function handleSubmit(){
        const response = await fetch("http://localhost:3000/login", {
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify({
                username: userName,
                password : password
            })
        });
        const data = await response.json();
        if(data.token){
            localStorage.setItem("token", data.token);
            navigate("/home");
        }
        else{
            window.alert(data.msg);
        }
    }
  return (
    <div>
        {showModal && <Signup handleReturn = {handleClick} />}
        <div className = "flex flex-row">
            <div>
                <img src = {Logo} className = "w-[700px] ml-[200px]"></img>
            </div>
            <div className='w-[450px] mt-[250px] ml-4' >
                <div className = "m-1 rounded-lg">
                    <input onChange = {handleUserNameChange} placeholder='Username' className = "p-4 w-[430px] rounded-lg bg-zinc-100"></input>
                </div>
                <div className = "ml-1 mt-2">
                    <input onChange = {handlePasswordChange} placeholder='Password' className = "p-4 w-[430px] rounded-lg bg-zinc-100"></input>
                </div>
                <div className = "mt-5">
                    <button onClick = {handleSubmit} className = "bg-purple-600 p-3 text-white rounded-lg w-[430px]">Signin</button>
                </div>
                <div className = "mt-3">
                    <button onClick = {ToHome} className = "bg-red-500 p-3 w-[430px] rounded-lg text-white">Continue Without Login</button>
                </div>
                <div className = "mt-2">
                    <button onClick = {handleClick} className = "bg-pink-500 p-3 w-[430px] rounded-lg text-white">Create New Account</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login