import React from 'react'
import mbimg from '../assets/img/mobile.png'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Createid = () => {
    return (
        <>


            <div className="w-full h-auto mb-24">

                <div className="max-[1200px] m-auto">

                    <div className="flex flex-wrap w-full h-auto">

                        <div className="w-[60%] lg:hidden">

                            <div className="w-full h-full truncate ">
                                <img src={mbimg} alt="mobile image " className='w-full h-full object-cover ' />

                            </div>

                        </div>

                        <div className="w-[40%] lg:w-[100%]">

                            <div className="flex flex-col w-full h-full mt-[120px] font-poppins pl-[100px] pr-[20px] lg:mt-[20px] lg:pl-[20px]">

                                <h1 className='pt-[20px] font-poppins text-[36px] leading-[50px]'>Create an account</h1>
                                <p className='font-poppins text-[16px] leading-[50px] my-[10px]'>Enter your details below</p>

                                <input type="text" placeholder='Name' className='my-[20px] px-2  border-b-[2px] pb-[5px]' />


                                <input type="text" placeholder='Email or Phone Number' className='my-[20px] px-2  border-b-[2px] pb-[5px]' />

                                <input type="text" placeholder=' Password' className='my-[20px] px-2 border-b-[2px] pb-[5px]' />


                                <div className="flex my-[20px] flex-col gap-5">
                                    <button className='bg-[#DB4444] rounded-[5px]  hover:bg-violet-600 text-white font-poppins px-[20px] py-[10px] text-[16px] float-end mx-[10px] '>Create Account</button>
                                    <button className='bg-[#fffff] rounded-[5px]  border-[2px]  hover:bg-violet-600 text-black font-poppins px-[20px] py-[10px] text-[20px] float-end mx-[10px] flex  justify-center gap-[10px]'>
                                        <FcGoogle  className='text-[28px]'/> 
                                        <p className='text-[16px]'> Sign up with Google</p>
                                        </button>


                                    <div className="flex">
                                    <p> Already have Account ? </p>
                                    <Link className='mx-[5px]' to='/login'>Log In</Link>


                                    </div>
                                </div>





                            </div>




                        </div>





                    </div>







                </div>


            </div>




        </>
    )
}

export default Createid
