import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react"
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
const Login = () => {
    const dispatch=useDispatch();
    const userData=useSelector(state=>state.users)
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    const login=()=>{
        const payload=userData && userData.length>1 && userData[0]===username && userData[2]===password
        if(payload){
            dispatch({
                type:"LOGIN",
                payload
            })
            navigate("/", { replace: true });
            window.location.reload()
        }else{
            alert("Wrong credential");
        }
       
    }
  useEffect(()=>{
    
  })
  return (
    <form className=''>
                <div className="bg-grey-lighter min-h-screen flex flex-col drop-shadow-lg">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Login</h1>
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                autoComplete='username'
                                placeholder="User Name"
                                onChange={(e)=>setUsername(e.target.value)} />
                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                autoComplete='current-password'
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}/>
                            <input
                                type="button"
                                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                                value="Login"
                                onClick={login}
                            />
                        </div>

                        <div className="text-grey-dark mt-6">
                            Don't have an account? 
                            <Link className="no-underline border-b border-blue text-blue-800 px-2" to="/register">
                               Register
                            </Link>.
                        </div>
                </div>
               </div>
            </form>
  )
}

export default Login