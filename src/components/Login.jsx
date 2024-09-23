import React from 'react'
import mbimg from '../assets/img/mobile.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>

            <div className="w-full h-auto">

                <div className="max-[1200px] m-auto">

                    <div className="flex flex-wrap w-full h-auto">

                        <div className="w-[60%]">

                            <div className="w-full h-full truncate">
                                <img src={mbimg} alt="mobile image " className='w-full h-full object-cover ' />

                            </div>

                        </div>

                        <div className="w-[40%]">

                            <div className="flex flex-col w-full h-full mt-[180px] font-poppins pl-[100px] pr-[20px]">

                                <h1 className='pt-[20px] font-poppins text-[36px] leading-[50px]'>Log in to Exclusive</h1>
                                <p className='font-poppins text-[16px] leading-[50px] my-[10px]'>Enter your details below</p>

                                <input type="text" placeholder='Enter your phone Number' className='my-[20px] ' />
                                <hr className='bg-black h-[2px]' />
                                <input type="text" placeholder='Enter your Password' className='my-[20px]' />
                                <hr  className='bg-black h-[2px] my-[10px]' />


                                <div className="flex my-[20px] justify-between">
                                <button className='bg-[#DB4444] rounded-[5px] text-white font-poppins px-[20px] py-[10px] text-[20px] float-end mx-[10px] '>Login</button>
                                <Link className='mx-[13px] mt-[10px]'>Forget Password</Link>
                                </div>


                               


                            </div>




                        </div>





                    </div>







                </div>


            </div>



        </>
    )
}

export default Login
