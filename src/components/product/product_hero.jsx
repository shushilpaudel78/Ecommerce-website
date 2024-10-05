import React from 'react'
import Product_sidebar from './Product_sidebar'
import applogo from '/img/product/applelogo.png'
import applephoto from '/img/product/applephoto.png'
import { FaArrowRight } from "react-icons/fa";

const Product_hero = () => {
    return (
        <>

            <div className="w-full h-auto px-[10px]">
                <div className="max-w-[1200px] m-auto">
                    <div className="flex">

                        <div className="w-[20%]  h-auto  px-[10px] md:w-[30%] sm:w-[30%]">
                            <Product_sidebar />

                        </div>

                        <div className="w-[80%]  h-auto md:w-[70%] sm:w-[70%] p-[10px]">

                            <div className="flex flex-row  bg-black text-white sm:py-4 ">

                                <div className="w-[50%] md:w-full">

                                    <div className="flex flex-col pt-[40px] pl-[80px] sm:pl-[10px] sm:items-center ">
                                        <div className="flex items-center gap-8 sm:gap-2">
                                            <div className="w-[40px] h-[49px]"><img src={applogo} alt="logo" /></div>
                                            <p className=' font-poppins text-[16px] font-medium '>Iphone 14 users</p>
                                        </div>

                                        <h1  className='font-poppins text-[48px] font-medium  sm:text-[36px] sm:text-center'>Up to 10% off Voucher</h1>

                                        <button className='flex items-center border-b-2 gap-4 w-[110px] pb-[10px]  py-[30px] sm:my-3 '>Shop Now  <FaArrowRight  /></button>

                                    </div>


                                </div>

                                <div className="w-[50%] md:hidden">


                                    <div className="w-[100%] h-[352]"><img src={applephoto} alt="iphone  photo"  className='w-full h-full object-cover'/></div>

                                </div>


                            </div>


                        </div>


                    </div>


                </div>

            </div>





        </>
    )
}

export default Product_hero
