import React from 'react'
import { data } from '../constants/CartData'

const About_last_cart = () => {
    return (
        <>
            <div className="w-full h-auto my-[80px] py-[30px] sm:my-0">
                <div className="max-w-[1200px] m-auto">

                    <div className="flex flex-wrap">

                        {
                            data?.map((data) => (




                                <div className="w-[33.33%] flex flex-col  my-[20px]  items-center gap-[10px] md:w-[50%] sm:w-full sm:bg-[#f5f5f5] sm:py-[10px]">


                                    <div className="w-[80px] h-[80px]"><img src={data.photo} alt="image" className='w-full h-full object-contain' /></div>
                                    <h1 className='uppercase font-poppins text-[20px]  font-bold leading-[40px]'>{data.finfo}</h1>
                                    <p className='text-[14px] font-poppins'>{data.sinfo}</p>


                                </div>

                            ))
                        }

                    </div>


                </div>


            </div>

        </>
    )
}

export default About_last_cart
