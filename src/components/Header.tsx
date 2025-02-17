import {  Moon, Send, Sun } from 'lucide-react'
import React from 'react'

function Header() {

  


  return (
    <div className=" flex justify-between items-center">
        <div className='text-4xl font-bold text-[#ffae00]' >VAIXBHAV</div>
        <div className='flex gap-4 items-center'>
          <div className='flex p-1 gap-1 bg-[#203536] rounded-full border-[1px] border-[#B8BEBF] border-solid items-center'>
          <Sun className="bg-white cursor-pointer rounded-full p-2 text-black w-8 h-8" />
          <Moon className=" rounded-full cursor-pointer  p-2 text-white w-8 h-8" />
          </div>
          <div className='border-[0.5px] border-solid w-[0.5px] h-[5vh] border-white'></div>
          
          <button className='text-[20px] border-[1px] border-[#ffae00] border-solid hover:bg-transparent hover:border-[#B8BEBF] hover:text-white bg-[#ffae00] transition-all ease-in-out duration-[500ms] text-black p-2 rounded-full pr-6 pl-6 font-[600] flex justify-center items-center gap-1'>HIRE ME
          <Send className='p-1'/>          </button>

        </div>
    </div>
  )
}

export default Header