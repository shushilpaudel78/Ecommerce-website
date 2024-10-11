import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {


    const [btnstyle, setBstyle] = useState('hidden');

    const toggleBtn = () => {

        if (btnstyle === 'hidden'){
        setBstyle('block');
        }else{
        setBstyle('hidden');

        }

    }


   

      

    

    return (
        <>

            <div className="w-full h-full py-[20px] px-[10px] sm:py-5  sticky">
                <div className=" max-w-[1200px] m-auto">

                    <div className="w-full h-auto flex justify-between items-center ">

                        <div className="logo">
                            <h1 className='font-poppins uppercase font-bold text-[23px]'>Swattai</h1>
                        </div>

                        

                            <ul className= {` flex gap-[30px] font-poppins 
                              md:items-centermd:flex-col md:bg-black md:w-full md:right-0 md:absolute md:top-20 md:px-5 md:py-8 md:text-white
                                  md:${btnstyle}`}>




                                <li><Link to='/' className='active:text-red-400 md:py-10'>Home</Link></li>
                                <li><Link to='/contact'className='active:text-red-400'>Contact</Link></li>
                                <li><Link to='/about' className='active:text-red-400'>About</Link></li>
                                <li><Link to='/signup' className='active:text-red-400'>Sign Up</Link></li>


                            </ul>
                        


                        <div className="flex md:justify-end">

                            <div className="input relative  w-[270px] h-[50px] border-[2px]  lg:hidden">
                                <input type="text" placeholder='What are you looking for ? ' className='w-full h-full bg-[#F5F5F5] pl-[10px] pr-[35px] font-poppins rounded-[2px]' />
                                <IoSearchOutline className='absolute right-[10px] top-[15px] w-[20px]  h-[20px] color-black' />


                            </div>

                            <ul className='flex text-[25px] gap-4 mx-4 py-3 px-2' id='myNav'>
                                <li ><Link to='/favorite' className='active:text-red-400'>  <CiHeart /></Link></li>

                                <li   className='relative'>
                                    <p id='cartCount' className='bg-red-600 rounded-[100px] text-[10px] text-white  text-center p-[4px] absolute top-[-12px] right-[-12px]'></p>
                                     <Link to='/addcart' className='active:text-red-400'>
                                      <IoCartOutline /></Link></li>
                              
                                <li ><Link to='/profile' className='active:text-red-400'><FaRegUser className='text-[20px]' /></Link></li>
                            </ul>




                            <button onClick={toggleBtn} > <IoReorderThreeOutline className='text-[30px] m-[7px] hidden md:block' /> </button>





                        </div>








                    </div>

                </div>


            </div>


            <hr className='mb-[70px] bg-black' />



        </>
    )
}

export default Nav;
