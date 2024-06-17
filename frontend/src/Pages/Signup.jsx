import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = ({handleReturn}) => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surName, setSurName] = useState("");
    const [email, setEmail] = useState("");
    const [workplace, setWorkPlace] = useState("");
    const [newPassword, setNewPassword] = useState("");
    function changeUserName (e) {
        setUserName(e.target.value);
    }
    function changeFirstName (e) {
        setFirstName(e.target.value);
    }
    function changeSurName (e) {
        setSurName(e.target.value);
    }
    function changeEmail (e) {
        setEmail(e.target.value);
    }
    function changeWorkplace (e) {
        setWorkPlace(e.target.value);
    }
    function changePassword (e) {
        setNewPassword(e.target.value);
    }
    async function handleSubmit () {
        const response = await fetch("http://localhost:3000/signup", {
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify({
                username : userName,
                firstname : firstName,
                surname : surName,
                email_address : email,
                workplace : workplace,
                new_password : newPassword,
            })
        });
        const data = await response.json();
        window.alert(data.msg);
        handleReturn();
    }
  return (<>
        <div className = "fixed left-0 right-0 top-0 bottom-0 bg-[#BDBDBD] opacity-85"></div>
        <div className = "fixed bg-white ml-[500px] mt-[200px] drop-shadow-lg w-[470px] pb-[5px] pt-[5px]">
            <div className = "m-1" >
                <input  onChange = {changeUserName} placeholder = "Username" className = "bg-zinc-100 p-3 w-[460px] rounded-lg"></input>
            </div>
            <div className = "m-1">
                <input onChange = {changeFirstName} placeholder = "First name" className = "bg-zinc-100 p-3 w-[460px] rounded-lg"></input>
            </div>
            <div className = "m-1">
                <input onChange = {changeSurName} placeholder = "Surname" className = "bg-zinc-100 p-3 w-[460px] rounded-lg"></input>
            </div>
            <div className = "m-1">
                <input onChange = {changeEmail} placeholder = "Email address" className = "bg-zinc-100 p-3 w-[460px] rounded-lg"></input>
            </div>
            <div className = "m-1">
            <input onChange = {changeWorkplace} placeholder = "Workplace" className = "bg-zinc-100 p-3 w-[460px] rounded-lg"></input>
            </div>
            <div className = "m-1">
            <input onChange = {changePassword} placeholder = "New password" className = "bg-zinc-100 p-3 w-[460px] rounded-lg"></input>
            </div>
            <div className = "m-1">
                <button onClick = {handleSubmit} className = "text-white bg-purple-500 p-3 rounded-lg w-[460px]">Signup</button>
            </div>
            <div className = "m-1">
                <button onClick = {handleReturn} className = "text-white bg-pink-500 p-3 rounded-lg w-[460px]">Already have a account ? Signin</button>
            </div>
        </div>
    </>
  )
}

export default Signup
