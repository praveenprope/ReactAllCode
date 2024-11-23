import React from 'react'
import { useState } from 'react'

function bgChanger() {
 
  const colorArray = ['red','blue','orange','pink','skyblue'];
  const [color,setColor] = useState('black');

     

  return (
    <>
      <div style={{backgroundColor: color }} className='h-screen w-full flex justify-center items-center' >
         <div className='space-x-4 h-12bf bg-white text-white p-6 rounded-lg' >
          {colorArray.map((items,index)=>{
             return(
               <button 
               style={{backgroundColor: items,}}
               className='p-4 rounded-xl' 
               key={index} 
               onClick={() => {return setColor(items)}} >
                 {items}
               </button>
             )
          })}
         </div>
      </div>
    
    </>
  )
}

export default bgChanger