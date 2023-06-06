import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
const LoginForm = ({setIsLoggedIn}) => {
    const [formData, setFormData]=useState({
        email:"",
        password:""
    })
    const[showPassword, setShowPassword]=useState(false);
    const navigate=useNavigate();
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]: event.target.value
        }
        ))

    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandler}>
        <label>
        <p>E-Mail Address<sup>*</sup>
        </p>
        <input type="email" required value={formData.email} placeholder='E-Mail id ' onChange={changeHandler} name="email"/>
        </label>
        <label>
        <p>Password<sup>*</sup>
        </p>
        <input type={showPassword ? ("text") : ("password")} value={formData.password} placeholder="show password" onChange={changeHandler} name="password"/>
        <Link to="#"><p>Forgot Password</p></Link>
        </label>

    <button>
        Sign In
    </button>
    </form>
  )
}

export default LoginForm
