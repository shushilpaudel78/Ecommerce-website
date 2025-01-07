import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Product_time = () => {
        const [time, setTime] = useState({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
        });

        useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date();
                setTime({
                    hours: now.getHours(),
                    minutes: now.getMinutes(),
                    seconds: now.getSeconds(),
                });
            }, 1000);

            return () => clearInterval(interval); // Clean up the interval on component unmount
        }, []);
        return (
            <>
                <div className="w-full h-full my-[40px] py-[20px] sm:my-[0px] px-[10px]">
                    <div className="max-w-[1200px] m-auto">


                        <div className="flex justify-between items-center  sm:flex-col sm:gap-3 sm:my-0">
                            <div className="flex flex-col">
                                <p className='font-poppins text-[16px] font-semibold text-black'>Today's</p>
                                <h1 className='text-[30px] text-textBlue font-grotesque font-semibold leading-[40px]'>Flash  Sales</h1>
                            </div>

                            <table className='w-[250px] h-auto  text-textBlue text-center font-poppins font-normal bg-lightBlue text-[14px] py-4 px-2 first-letter:uppercase' >
                                <tr>
                                    <td>Hours</td>
                                    <td>Minutes</td>
                                    <td>Secounds</td>

                                </tr>
                                <tr className='text-[20px] font-semibold'>
                                    <td>{String(time.hours).padStart(2, '0')}</td>
                                    <td>{String(time.minutes).padStart(2, '0')}</td>
                                    <td>{String(time.seconds).padStart(2, '0')}</td>

                                </tr>
                            </table>
                            <div className="flex gap-[10px]">
                                <button className='bg-primaryBlue text-[20px] text-secondaryWhite rounded-full p-[10px]'> <FaArrowLeft /></button>
                                <button className='bg-primaryBlue text-[20px] text-secondaryWhite  rounded-full p-[10px]'> <FaArrowRight /></button>
                            </div>

                        </div>

                    </div>

                </div>


            </>
        )
    }

    export default Product_time
