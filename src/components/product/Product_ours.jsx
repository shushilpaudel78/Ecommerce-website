import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Our_cart from './Cart/Our_cart';
import Ourn_cart from './Cart/Ourn_cart';

const Product_ours = () => {
    return (
        <>

            <div className="w-full h-auto my-[20px] py-[20px]" >
                <div className="max-w-[1200px] m-auto">



                    <div className="flex items-center gap-3 px-[10px]">

                        <div className="w-[30px] h-[40px] bg-red-500" ></div>
                        <p className='font-poppins  text-[16px] font-semibold'>Our Products</p>

                    </div>


                    <div className="flex justify-between items-center my-[20px] px-[10px]">

                        <h1 className='text-[30px] font-poppins font-semibold'>Explore Our Products</h1>

                        <div className="flex gap-[10px]">

                            <button className='bg-[#F5F5F5] text-[20px] rounded-full p-[10px]'> <FaArrowLeft /></button>
                            <button className='bg-[#F5F5F5] text-[20px]  rounded-full p-[10px]'> <FaArrowRight /></button>

                        </div>

                    </div>






                    <div className="flex flex-wrap px-[10px]">
                        <Our_cart />
                        <Ourn_cart />
                        <Our_cart />
                        <Ourn_cart />



                    </div>
                    

                    <div className='flex justify-center my-[10px]'>
                        <button className='font-poopins px-[20px] py-[10px] bg-[#DB4444] text-[16px] rounded-[5px] text-white'>View All Products</button>
                    </div>



                </div>

            </div>




        </>
    )
}

export default Product_ours
