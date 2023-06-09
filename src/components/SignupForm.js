import React from 'react'
import { useState } from 'react'
 
const Signup = () => {
  const [formData, setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  function changeHandler(event){
    setFormData((prevData)=>({
        ...prevData,
        [event.target.name]: event.target.value
    }
    ))

}
  return (
    <div>
        <div  className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button>Student</button>
            <button>Instructor</button>

        </div>

           <form>
        {/* first-last name */}
          <div lassName='flex flex-col md:flex-row gap-4 mt-[20px]'> 
              <label className='w-full'>
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                  <input type="text" required name="firstName" onChange={changeHandler} placeholder='Enter Your first name' value={formData.firstName}/>
                </label>
                <label>
                  <p>Last Name <sup>*</sup></p>
                  <input type="text" required name="lastName" onChange={changeHandler} placeholder='Enter Your last name' value={formData.lastname}/>
                </label>
          </div>
          {/* Email address */}
          <label>
                  <p>Email <sup>*</sup></p>
                  <input type="email" required name="email" onChange={changeHandler} placeholder='Enter Your email ID' value={formData.email}/>
          </label>
          {/* Password and confirm password */}
          <div>
                <label>
                  <p>Password<sup>*</sup></p>
                  <input type="password" required name="password" onChange={changeHandler} placeholder='Enter password' value={formData.password}/>
                </label>
                <label>
                  <p>Confirm Password<sup>*</sup></p>
                  <input type="password" required name="confirmPassword" onChange={changeHandler} placeholder='Confirm password' value={formData.confirmPassword }/>
                </label>
          </div>
          <button>Create Account</button>
         
        </form> 
    </div>
  )
}

export default Signup
