import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {


    const [status, setStatus] = React.useState(true);






    return (
        <>

            <div className="w-full h-full py-[20px] px-[5px] ">
                <div className=" max-w-[1200px] m-auto">

                    <div className="w-full h-auto flex justify-between items-center ">

                        <div className="logo">
                            <h1 className='font-poppins uppercase font-bold text-[23px]'>Swattai</h1>
                        </div>

                        {status? 

                            <ul className=" md:items-center md:space-x-4 flex gap-[20px] font-poppins md:flex-col md:absolute md:left-[10px] md:top-[100px] md:bg-white md:hidden">




                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/signup'>Sign Up</Link></li>


                            </ul>:null
                        }


                        <div className="flex md:justify-end">

                            <div className="input relative  w-[270px] h-[50px] border-[2px]  lg:hidden">
                                <input type="text" placeholder='What are you looking for ? ' className='w-full h-full bg-[#F5F5F5] pl-[10px] pr-[35px] font-poppins rounded-[2px]' />
                                <IoSearchOutline className='absolute right-[10px] top-[15px] w-[20px]  h-[20px] color-black' />


                            </div>

                            <ul className='flex text-[25px] gap-4 mx-4 py-3 px-2' id='myNav'>
                                <li ><Link to='/favorite'>  <CiHeart /></Link></li>
                                <li ><Link to='/addcart'> <IoCartOutline /></Link></li>
                                <li ><Link to='/admin'><FaRegUser className='text-[20px]' /></Link></li>
                            </ul>




                            <button onClick={() => setStatus(!status)} > <IoReorderThreeOutline className='text-[30px] m-[7px] hidden md:block' /> </button>











                        </div>








                    </div>

                </div>


            </div>


            <hr className='mb-[70px] bg-black' />



        </>
    )
}

export default Nav;
