import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import cellphone from '/img/product/cellphone.png'

const Product_catagory = () => {
    return (
        <>

            <div className="w-full h-full my-[40px] py-[20px]">

                <div className="max-w-[1200px] m-auto">

                    <div className="flex items-center gap-3">

                        <div className="w-[30px] h-[40px] bg-red-500" ></div>
                        <p className='font-poppins  text-[16px] font-semibold'>Categories</p>

                    </div>


                    <div className="flex justify-between items-center my-[20px]">

                        <h1 className='text-[30px] font-poppins font-semibold'>Browse By Category</h1>

                        <div className="flex gap-[10px]">

                            <button className='bg-[#F5F5F5] text-[20px] rounded-full p-[10px]'> <FaArrowLeft /></button>
                            <button className='bg-[#F5F5F5] text-[20px]  rounded-full p-[10px]'> <FaArrowRight /></button>

                        </div>

                    </div>



                    <div className=" w-full h-auto flex flex-wrap  p-[10px]">


                        <div className="w-[16.66%] h-auto hover:bg-[#DB4444]">
                            <div className="flex items-center justify-center  border-[2px] m-[10px]">

                                <div className="w-[56px] h-[56px] m-[50px]"> <img className='w-full h-full object-cover' src={cellphone} alt="cellphone" /></div>


                            </div>

                        </div>


                        <div className="w-[16.66%] h-auto hover:bg-[#DB4444]">
                            <div className="flex items-center justify-center  border-[2px] m-[10px]">

                                <div className="w-[56px] h-[56px] m-[50px]"> <img className='w-full h-full object-cover' src={cellphone} alt="cellphone" /></div>


                            </div>

                        </div>



                        <div className="w-[16.66%] h-auto hover:bg-[#DB4444]">
                            <div className="flex items-center justify-center  border-[2px] m-[10px]">

                                <div className="w-[56px] h-[56px] m-[50px]"> <img className='w-full h-full object-cover' src={cellphone} alt="cellphone" /></div>


                            </div>

                        </div>



                        <div className="w-[16.66%] h-auto hover:bg-[#DB4444]">
                            <div className="flex items-center justify-center  border-[2px] m-[10px]">

                                <div className="w-[56px] h-[56px] m-[50px]"> <img className='w-full h-full object-cover' src={cellphone} alt="cellphone" /></div>


                            </div>

                        </div>




                        <div className="w-[16.66%] h-auto hover:bg-[#DB4444]">
                            <div className="flex items-center justify-center  border-[2px] m-[10px]">

                                <div className="w-[56px] h-[56px] m-[50px]"> <img className='w-full h-full object-cover' src={cellphone} alt="cellphone" /></div>


                            </div>

                        </div>




                        <div className="w-[16.66%] h-auto hover:bg-[#DB4444]">
                            <div className="flex items-center justify-center  border-[2px] m-[10px]">

                                <div className="w-[56px] h-[56px] m-[50px]"> <img className='w-full h-full object-cover' src={cellphone} alt="cellphone" /></div>


                            </div>

                        </div>

















                    </div>




                </div>

            </div>



        </>
    )
}

export default Product_catagory
