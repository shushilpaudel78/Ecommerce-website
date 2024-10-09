import React from 'react'
import Product_photo from '/img/product/bag.png'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

const Wishlist_cart = () => {
    return (
        <>

        

            <div className="w-[25%]  md:w-[50%] sm:w-full hover:scale-105">

                <div className="bg-[#F5F5F5] mx-3 my-3">


                    <div className="flex justify-end px-6 py-5">

                        <div className="flex flex-col gap-4 text-[30px] left ">
                            <FaRegHeart />
                            <IoEyeSharp />

                        </div>


                    </div>


                    <div className="w-[190px] h-[180px] ml-10 "><img src={Product_photo} alt="product photo" className='w-full h-full object-cover' /></div>

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


                </div>
            </div>




        </>
    )
}

export default Wishlist_cart
