import React, { useState } from 'react'

const Signin = () => {
    const[user,setUser]=useState("")
    return (
    <div className='flex justify-center items-center h-screen w-full bg-gray-200 p-20'>
      <div className='container flex-col gap-20 h-[80%] bg-white flex justify-center items-center rounded-2xl'>
            <form action="" className='flex justify-center items-center flex-col gap-2'>
               <div> <label for="username" >UserName:</label> <input placeholder='username' className='border-[2px]' id="username" type='textbox' onChange={(e)=>setUser(e.target.value)}></input></div>
               <div> <label for="password" >Password:</label> <input className='border-[2px]' id="password" type='password' placeholder='password'></input></div>
            </form>
      </div>
    </div>
  )
}

export default Signin
