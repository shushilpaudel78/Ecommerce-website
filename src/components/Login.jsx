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

                            <div className="w-[800px] h-[650px] truncate">
                                <img src={mbimg} alt="mobile image " className='w-full h-full object-cover ' />

                            </div>

                        </div>

                        <div className="w-[40%]">

                            <div className="flex flex-col w-full h-full mt-[100px]">

                                <h1 className='pt-[20px]'>Log in to Exclusive</h1>
                                <p>Enter your details below</p>

                                <input type="text" placeholder='Enter your phone Number' />
                                <input type="text" placeholder='Enter your Password' />


                                <button className='bg-[#DB4444] rounded-[5px] text-white font-poppins px-[10px] py-[10px] text-[20px] float-end'>Login</button>
                                <Link>Forget Password</Link>

                                
                            </div>




                        </div>





                    </div>







                </div>


            </div>



        </>
    )
}

export default Login
