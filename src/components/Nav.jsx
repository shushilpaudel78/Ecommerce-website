import React from 'react'
import {Link} from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <>

    <div className="w-full h-full py-10 px-[5px]">
        <div className=" max-w-[1200px] m-auto">

            <div className="w-full h-auto flex justify-between items-center">

                <div className="logo">
                    <h1 className='font-poppins uppercase font-bold text-[23px]'>Swattai</h1>
                </div>

                <ul className='flex gap-[20px] font-poppins '>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Sign Up</Link></li>
                    

                </ul>


                <div className="input relative  w-[270px] h-[50px] border-[2px] ">
                    <input type="text" placeholder='What are you looking for ? ' className='w-full h-full bg-[#F5F5F5] pl-[10px] pr-[35px] font-poppins rounded-[2px]'  />
                    <IoSearchOutline className='absolute right-[10px] top-[15px] w-[20px]  h-[20px] color-black' />


                </div>




            </div>

        </div>


    </div>


    <hr className='mb-[70px] bg-black' />



    </>
  )
}

export default Nav
