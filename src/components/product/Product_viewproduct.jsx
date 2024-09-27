import React from 'react'
import Product_photo from '/img/product/joystick.png'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const Product_viewproduct = () => {

    return (
        <>
            <div className="w-full h-auto" >
                <div className="max-w-[1200px] m-auto">

                    <div className="flex flex-wrap">

                        <div className="w-[25%] ">

                            <div className="bg-[#F5F5F5] mx-3 my-3">


                                <div className="flex justify-between px-6 py-5">

                                    <p className='bg-red-600 w-[40px] h-[33px] text-center text-white font-poppins p-[5px]'>40%</p>
                                    <div className="flex flex-col gap-4 text-[30px]">
                                        <FaRegHeart />
                                        <IoEyeSharp />

                                    </div>


                                </div>


                                <div className="w-[190px] h-[180px] ml-10 "><img src={Product_photo} alt="product photo" className='w-full h-full object-cover' /></div>/


                            </div>
                        </div>



                        




                        




                    </div>


                </div>


            </div>


        </>
    )
}

export default Product_viewproduct
