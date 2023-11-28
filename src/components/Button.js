import React from 'react'

function Button({data}) {
  return (
    <div className='flex'>
       {data.map((item,index)=>(
        <button key={index} className=' hidden  md:inline-block bg-gray-400 p-1 px-4 mx-2 h-9 rounded-lg text-white'>{item}</button>
       ))}
    </div>
  )
}

export default Button