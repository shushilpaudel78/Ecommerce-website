import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <>

            <div className="w-full h-auto">
                <div className="max-[1200px] m-auto">

                    <div className="flex flex-wrap w-full h-[100vh] overflow-hidden " >
                        <div className="w-[60%] lg:hidden bg-textBlue">
                            <div className="w-full h-full truncate " style={{clipPath:'polygon(100% 0, 100% 100%, 0 100%, 41% 48%, 0 1%)'}}>
                                <img src='/img/about/mobile.png' alt="mobile image " className='w-full h-full object-cover ' />
                            </div>

                        </div>

                        <div className="w-[40%] lg:w-[100%]">

                            <div className="flex flex-col w-full h-full mt-[150px] font-poppins pl-[100px] pr-[20px] lg:mt-[20px]  md:pl-[30px] sm:pl-[20px] sm:mt-[10px]">

                                <h1 className='pt-[20px] font-poppins text-[36px] leading-[50px]'>Log in to Exclusive</h1>
                                <p className='font-poppins text-[16px] leading-[50px] my-[10px]'>Enter your details below</p>

                                <input type="text" placeholder='Email or Phone Number' className='my-[20px] px-2  border-b-[2px] pb-[5px]' />
                                {/* <hr className='bg-black h-[2px]' /> */}
                                <input type="text" placeholder=' Password' className='my-[20px] px-2 border-b-[2px] pb-[5px]'  />
                                {/* <hr  className='bg-black h-[2px] mb-[10px]' /> */}


                                <div className="flex my-[20px] justify-between">
                                <button className='bg-[#DB4444] rounded-[5px]  hover:bg-violet-600 text-white font-poppins px-[20px] py-[10px] text-[16px] float-end mx-[10px] '>Login</button>
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

export default LoginForm
