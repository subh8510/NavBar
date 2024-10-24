import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full justify-between pr-5 items-center flex gap-5 text-black text-2xl'>
      <div id="logo" className='border-[2px] border-red-400 rounded-xl font-bold m-2 p-2'>NaaCho</div>
      <div className='font-semibold text-gray-500'>
    <ul className='flex gap-10'>
      <li><Link className='hover:text-black border-l-[5px] pl-2 border-gray-200 hover:border-black'  to="/">Home</Link></li>
      <li><Link className='hover:text-black border-l-[5px] pl-2 border-gray-200 hover:border-black'  to="/AboutUs">About Us</Link></li>
      <li><Link className='hover:text-black border-l-[5px] pl-2 border-gray-200 hover:border-black'  to="/contactus">Contact Us</Link></li>
      <li><Link className='hover:text-black border-l-[5px] pl-2 border-gray-200 hover:border-black'  to="/singin">Signin</Link></li>
      <li><Link className='hover:text-black border-l-[5px] pl-2 border-gray-200 hover:border-black'  to="/todo">Todo</Link></li>
      <li><Link className='hover:text-black border-l-[5px] pl-2 border-gray-200 hover:border-black'  to="/weather">Weather</Link></li>

      </ul>  
      </div>
    </div>
  )
}

export default Nav