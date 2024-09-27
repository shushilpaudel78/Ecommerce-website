import React from 'react'
import Product_sidebar from './Product_sidebar'
import applogo from '/img/product/applelogo.png'
import applephoto from '/img/product/applephoto.png'
import { FaArrowRight } from "react-icons/fa";

const Product_hero = () => {
    return (
        <>

            <div className="w-full h-auto">
                <div className="max-w-[1200px] m-auto">
                    <div className="flex">

                        <div className="w-[20%]  h-auto">
                            <Product_sidebar />

                        </div>

                        <div className="w-[80%]  h-auto">

                            <div className="flex flex-row  bg-black text-white p-[10px]">

                                <div className="w-[50%]">

                                    <div className="flex flex-col pt-[40px] pl-[80px]">
                                        <div className="flex items-center gap-9">
                                            <div className="w-[40px] h-[49px]"><img src={applogo} alt="logo" /></div>
                                            <p className=' font-poppins text-[16px] font-medium '>Iphone 14 users</p>
                                        </div>

                                        <h1  className='font-poppins text-[48px] font-medium '>Up to 10% off Voucher</h1>

                                        <button className='flex items-center border-b-2 gap-4 w-[110px] pb-[10px]  py-[30px]'>Shop Now  <FaArrowRight  /></button>

                                    </div>


                                </div>

                                <div className="w-[50%]">


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
