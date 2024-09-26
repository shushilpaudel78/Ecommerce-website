import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {

//     const NavBar = () => {
//   // Step 1: Set up state
//   const [isOpen, setIsOpen] = useState(false);

//   // Step 2: Function to toggle the state
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

   
    return (
        <>

            <div className="w-full h-full py-10 px-[5px]">
                <div className=" max-w-[1200px] m-auto">

                    <div className="w-full h-auto flex justify-between items-center md:justify-end ">

                        <div className="logo">
                            <h1 className='font-poppins uppercase font-bold text-[23px]'>Swattai</h1>
                        </div>

                        <ul className="flex gap-[20px] font-poppins ">

                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/signup'>Sign Up</Link></li>


                        </ul>


                        <div className="flex md:justify-end">

                            <div className="input relative  w-[270px] h-[50px] border-[2px]  lg:hidden">
                                <input type="text" placeholder='What are you looking for ? ' className='w-full h-full bg-[#F5F5F5] pl-[10px] pr-[35px] font-poppins rounded-[2px]' />
                                <IoSearchOutline className='absolute right-[10px] top-[15px] w-[20px]  h-[20px] color-black' />


                            </div>

                            <ul className='flex text-[25px] gap-4 mx-4 py-3 px-2' id='myNav'>
                                <li ><Link to='/love'>  <CiHeart /></Link></li>
                                <li ><Link to='/addtocart'> <IoCartOutline /></Link></li>
                                <li ><Link to='/admin'><FaRegUser className='text-[20px]' /></Link></li>
                            </ul>




                            <button > <IoReorderThreeOutline className='text-[30px] m-[7px] hidden md:block' /> </button>











                        </div>








                    </div>

                </div>


            </div>


            <hr className='mb-[70px] bg-black' />



        </>
    )
}

export default Nav;
