import React from 'react'
import { useSelector } from "react-redux";
const Home = () => {
  const userData=useSelector(state=>state.users)
 
  return (
    <div>
          {userData && (<div key={userData[0]} className='text-center capitalize font-semibold'>{userData[3]}</div>)}
          <div className='py-8 px-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6  '>
              <img src='./assets/bulbBlack.jpg' alt='img-demo' className='w-[100%] h-60 rounded-md '/>
              <img src='./assets/mount2.jpg' alt='img-demo' className='w-[100%] h-60 rounded-md '/>
              <img src='../assets/bulbBig.jpg' alt='img-demo' className='w-[100%] h-60 rounded-md '/>
              <img src='../assets/catDark.jpg' alt='img-demo' className='w-[100%] h-60 rounded-md '/>
              <img src='../assets/rose.jpg' alt='img-demo' className='w-[100%] h-80 rounded-md '/>
              <img src='../assets/deerSnow.jpg' alt='img-demo' className='w-[100%] h-80 rounded-md '/>
              <img src='../assets/nightSky.jpg' alt='img-demo' className='w-[100%] h-80 rounded-md '/>
              <img src='../assets/star.jpg' alt='img-demo' className='w-[100%] h-80 rounded-md '/>
            </div>
          </div>
    </div>
  )
}

export default Home