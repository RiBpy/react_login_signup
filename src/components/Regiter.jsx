import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
const Regiter = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[location,setLocation]=useState('')
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
   const dispatch=useDispatch();
   const navigate=useNavigate()
    const register=(e)=>{
        if(username===""){
            alert("Provide Username")
        }else if(email==="" && !email.includes("@")){
            alert("Invalid Email")
        }else if(location===""){
            alert("Provide Location")
        }else if(password.length<5){
            alert("Password must be 5+ character")
        }
       if(username && email && location && password && confirmPassword ){
        dispatch({
            type:"REGISTER",
            payload:{
                id:(new Date()).getTime(),
                username,email,password,location
            }
        });
        localStorage.setItem("user",JSON.stringify({
            users:[
                username,
                email,
                password,
                location
            ]
        }))
        alert("Registered")
        navigate("/login", { replace: true });
        window.location.reload()
       }
    }
    return (
            <form className='py-4'>
                <div className="bg-grey-lighter min-h-screen flex flex-col drop-shadow-lg">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Regsiter</h1>
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                autoComplete='usename'
                                name='username'
                                placeholder="User Name"
                                onChange={(e)=>setUsername(e.target.value)} />

                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                autoComplete='current-email'
                                name='email'
                                placeholder="Email" 
                                onChange={(e)=>setEmail(e.target.value)}/>

                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                autoComplete='new-password'
                                name='password'
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}/>
                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Confirm Password"
                                name='confirm_pass'
                                onChange={(e)=>setConfirmPassword(e.target.value)}/>
                                {password!==confirmPassword&&<small key={email+password} className="text-red-700">Not Matched</small>}
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Location"
                                name='location'
                                onChange={(e)=>setLocation(e.target.value)}/>

                            <input
                                type="button"
                                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                                value="Submit"
                                onClick={register}
                            />
                        </div>

                        <div className="text-grey-dark mt-6">
                            Already have an account? 
                            <Link className="no-underline border-b border-blue text-blue-800 px-2" to="/login">
                                Log in
                            </Link>.
                        </div>
                </div>
               </div>
            </form>
    )
}

export default Regiter