import React from 'react'

const LoginForm = () => {
    const [formData, setFormData]=useState({
        email:"",
        password:""
    })
    const[showPassword, setShowPassword]=useState(false);

    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]: event.target.value
        }
        ))

    }
  return (
    <form>
        <label>
        <p>E-Mail Address<sup>*</sup>
        </p>
        <input type="text"required value={formData.email} placeholder='E-Mail id ' onChange={changeHandler} name/>
        </label>
        <label>
        <p>Password<sup>*</sup>
        </p>
        <input type={showPassword ? ("text") : ("password")} value={formData.password} placeholder="show password" onChange={changeHandler}/>
        <Link to="#"><p>Forgot Password</p></Link>
        </label>

    <button>
        Sign In
    </button>
    </form>
  )
}

export default LoginForm
