import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Our_cart from '../Cart/product _cart/Our_cart';
import Ourn_cart from '../Cart/product _cart/Ourn_cart';
import Red_button from '../Button/Red_button';

const Product_ours = () => {
    return (
        <>

            <div className="w-full h-auto my-[20px] py-[20px] sm:my-0" >
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



                    </div>


                    <div className='flex justify-center my-[10px]'>

                        <Red_button  name="View All Products" />


                    </div>



                </div>

            </div>




        </>
    )
}

export default Product_ours
