import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const userData=useSelector(state=>state.users)
const navigate = useNavigate();
const dispatch=useDispatch();
const logout =()=>{
  dispatch({
      type:"LOGOUT"
  })
  navigate("/register", { replace: true });
  localStorage.removeItem("user")
  window.location.reload()
}
  return (
    <nav className='bg-gray-200 py-4 px-6 z-101 '>
       <div className="flex container justify-between items-center">
          <div className="flex md:ml-5">
            <Link
                to="/"
                className="items-center hidden sm:block"
              >
                <img src='./ri.png' alt="logo" className="w-12 object-cover" />
              </Link>
              <ul className='flex gap-2 wrap items-center'>
                  {
                  userData && (
                      <li 
                  className='flex flex-col uppercase  relative sm:hover:before:absolute sm:hover:before:content sm:hover:before:w-[80%] sm:hover:before:top-6 sm:hover:before:left-2 sm:hover:before:h-1 sm:hover:before:bg-gradient-to-tr from-slate-400 to-slate-600 sm:px-2 rounded-sm'><Link to="/">Home</Link></li>
                    )
                  }
                  <li className='lex flex-col uppercase  relative sm:hover:before:absolute sm:hover:before:content sm:hover:before:w-[80%] sm:hover:before:top-6 sm:hover:before:left-2 sm:hover:before:h-1 sm:hover:before:bg-gradient-to-tr from-slate-400 to-slate-600 sm:px-2 rounded-sm'><Link to="/register">Register</Link></li>
                  {!userData? (<li className='lex flex-col uppercase  relative sm:hover:before:absolute sm:hover:before:content sm:hover:before:w-[80%] sm:hover:before:top-6 sm:hover:before:left-2 sm:hover:before:h-1 sm:hover:before:bg-gradient-to-tr from-slate-400 to-slate-600 sm:px-2 rounded-sm'><Link to="/login">Login</Link></li>):(<li className='lex flex-col uppercase  relative sm:hover:before:absolute sm:hover:before:content sm:hover:before:w-[80%] sm:hover:before:top-6 sm:hover:before:left-2 sm:hover:before:h-1 sm:hover:before:bg-gradient-to-tr from-slate-400 to-slate-600 sm:px-2 rounded-sm' onClick={logout}>Logout</li>)}
            </ul>
          </div>
          {userData && userData.length>0 ? (<div className='text-black font-bold w-10 h-10 rounded-full bg-[#ddd] flex items-center justify-center uppercase hover:bg-[#eee]' key={userData[0]}>{userData[0].slice(0,1)}</div>):null}
       </div>
    </nav>
  )
}

export default Navbar