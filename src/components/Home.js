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
              <img src='../assets/table1.jpg' alt='img-demo' className='w-[100%] h-60 rounded-md '/>
              <img src='../assets/table5.jpg' alt='img-demo' className='w-[100%] h-60 rounded-md '/>
              <img src='../assets/flo.jpg' alt='img-demo' className='w-[100%] h-[90%] rounded-md '/>
              <img src='../assets/bulb3.jpg' alt='img-demo' className='w-[100%] h-[90%] rounded-md '/>
              <img src='../assets/deathtree.jpg' alt='img-demo' className='w-[100%] h-[90%] rounded-md '/>
              <img src='../assets/road.jpg' alt='img-demo' className='w-[100%] h-[90%] rounded-md '/>
            </div>
          </div>
    </div>
  )
}

export default Home