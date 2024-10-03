import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import comppic from "/img/product/computer.png"

const Our_cart = () => {
    return (
        <>


            <div className="w-[25%] md:w-[50%] sm:w-full hover:scale-105 ">

                <div className="bg-[#F5F5F5] mx-3 my-3">


                    <div className="flex justify-between px-6 py-5">

                        <p className='text-[16px] font-poppins bg-[#00FF66] w-[80px] h-[40px] text-center pt-[8px] text-white'>New</p>

                        <div className="flex flex-col gap-4 text-[30px] left ">
                            <FaRegHeart />
                            <IoEyeSharp />

                        </div>


                    </div>


                    <div className="w-[190px] h-[180px] ml-10 "><img src={comppic} alt="product photo" className='w-full h-full object-cover' /></div>

                    <button className='w-full py-[10px] text-white bg-black font-poppins text-[16px]'>Add to cart</button>


                </div>


                <div className="flex flex-col p-5 font-poppins text-[16px] gap-2">
                    <p className='font-semibold'>ASUS FHD Gaming Laptop</p>
                    <div className="flex gap-4">

                        <p className='text-red-500'>$700 </p>
                        <div className="flex  text-yellow-500">
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <p>(325)</p>
                        </div>

                    </div>
                    <div className="flex gap-3">
                        <input type="radio" name='product' className='bg-red-500' />
                        <input type="radio" name='product' className='bg-red-500' />



                    </div>



                </div>
            </div>



        </>
    )
}

export default Our_cart