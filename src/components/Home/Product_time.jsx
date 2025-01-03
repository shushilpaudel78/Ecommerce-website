import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Product_time = () => {
    return (
        <>
            <div className="w-full h-full my-[40px] py-[20px] sm:my-[0px]">

                <div className="max-w-[1200px] m-auto">
                    <div className="flex items-center gap-3 px-[10px]">
                        <div className="w-[30px] h-[40px] bg-red-500" ></div>
                        <p className='font-poppins  text-[16px] font-semibold'>Today's</p>
                    </div>

                    <div className="flex justify-between items-center my-[20px] px-[10px] sm:flex-col sm:gap-3 sm:my-0">

                        <h1 className='text-[30px] font-poppins font-semibold'>Flash  Sales</h1>

                        <table className='w-[250px] h-auto text-center font-poppins font-normal bg-[#F5F5F5] text-[14px] py-[20px] first-letter:uppercase' >
                            <tr>
                                <td>Days</td>
                                <td>Hours</td>
                                <td>Minutes</td>
                                <td>Secounds</td>

                            </tr>
                            <tr className='text-[20px] font-semibold'>
                                <td>03</td>
                                <td>23</td>
                                <td>19</td>
                                <td>56</td>

                            </tr>
                        </table>
                        <div className="flex gap-[10px]">
                            <button className='bg-[#F5F5F5] text-[20px] rounded-full p-[10px]'> <FaArrowLeft /></button>
                            <button className='bg-[#F5F5F5] text-[20px]  rounded-full p-[10px]'> <FaArrowRight /></button>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Product_time
