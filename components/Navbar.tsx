"use client"
import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {RxCross1} from "react-icons/rx"
import Link from 'next/link';



const Navbar = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <div className='bg-[#8ed8e3] py-5'>
        <div className='flex justify-between items-center max-w-[1000px] mx-auto'>
           <Link href='/'> <div className='text-3xl font-bold ms-2'>OnlineStore</div></Link>
            {
                toggle ? <RxCross1 onClick={()=>setToggle(!toggle)} className="block me-5  text-2xl md:hidden"/> : <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="block me-5  text-2xl md:hidden"/>
            }

            <ul className='hidden md:flex gap-10'>
                <li className='text-xl font-serif cursor-pointer hover:underline'><Link href='/'>Home</Link></li>
                <li className='text-xl font-serif cursor-pointer hover:underline'><Link href='/products'>Product</Link></li>
            </ul>
            {/* Responsive */}
            <ul className={`flex flex-col absolute top-[75px]  bg-black w-full h-[120px] ps-2 gap-5 pt-3 duration-300 text-white ${toggle ? 'left-[0]':'left-[-100%]'}`}>
                <li className=' text-white text-2xl cursor-pointer hover:underline absolute right-4'><Link href='/'>Home</Link></li>
                <li className=' text-white text-2xl cursor-pointer hover:underline absolute right-4 top-16'><Link href='/products'>Product</Link></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar
