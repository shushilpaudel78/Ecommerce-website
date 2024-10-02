import React from 'react'
import Jocket_photo from '/img/product/jacket.png'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

const Selling_cart = () => {
    return (
        <>


            <div className="w-[25%]  md:w-[50%] sm:w-[100%]">

                <div className="bg-[#F5F5F5] mx-3 my-3">


                    <div className="flex justify-between px-6 py-5">

                        <p className='bg-red-600 w-[40px] h-[33px] text-center text-white font-poppins p-[5px]'>40%</p>
                        <div className="flex flex-col gap-4 text-[30px]">
                            <FaRegHeart />
                            <IoEyeSharp />

                        </div>


                    </div>


                    <div className="w-[190px] h-[180px] ml-10 "><img src={Jocket_photo} alt="product photo" className='w-full h-full object-cover' /></div>

                    <button className='w-full py-[10px] text-white bg-black font-poppins text-[16px]'>Add to cart</button>


                </div>


                <div className="flex flex-col p-5 font-poppins text-[16px] gap-2">                                <p className='font-semibold'>HAVIT HV-G92 Gamepad</p>
                    <p className='text-red-500'>$120 <span className='text-[#686666] mx-2 line-through'>$160</span></p>
                    <div className="flex  text-yellow-500">
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <p>(88)</p>
                    </div>

                </div>
            </div>





        </>
    )
}

export default Selling_cart
