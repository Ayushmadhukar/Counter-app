import React from 'react'
import { useState } from 'react'

function App() {
  const [num,SetNum] = useState(0)
  function increment(num){
    SetNum(num+1)
  }
   function decrement(num){
    if(num==0){
      SetNum(0)
    }
    else SetNum(num-1)
  }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-400'>
      <h1 className='text-[60px] '>{num}</h1>
      <div className='flex gap-5 mt-5'>
        <button className='px-3 py-2 rounded-xl bg-blue-600 uppercase hover:scale-90'onClick={()=>{
          increment(num)
        }}>increment</button>
        <button className='px-3 py-2 rounded-xl bg-blue-600 hover:scale-90 uppercase' onClick={()=>{
          // if(num > 0){
          //   decrement(num)
          // }
          decrement(num)
        }}>decrement</button>
      </div>
    </div>
  )
}

export default App
