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
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'
    >
        <label className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>E-Mail Address<sup className='text-pink-200'>*</sup>
        </p>
        <input type="email" required value={formData.email} placeholder='E-Mail id ' onChange={changeHandler} name="email"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        </label>
        <label className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup>
        </p>
        <input type={showPassword ? ("text") : ("password")} value={formData.password} placeholder="Show password" onChange={changeHandler} name="password"
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        <Link to="#"><p>Forgot Password</p></Link>
        </label>

    <button>
        Sign In
    </button>
    </form>
  )
}

export default LoginForm
