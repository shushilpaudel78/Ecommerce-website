import React from 'react'
import bus from '/img/about/bus.png'

const About_last_cart = () => {
    return (
        <>

            <div className="w-full h-auto my-[80px] py-[30px]">

                <div className="max-w-[1200px] m-auto">


                    <div className="flex flex-wrap">


                        <div className="w-[33.33%] flex flex-col  items-center   gap-[10px] md:w-[50%] sm:w-full my-[20px] sm:bg-[#f5f5f5] sm:py-[10px]">


                            <div className="w-[80px] h-[80px]"><img src={bus} alt="image" className='w-full h-full object-contain' /></div>
                            <h1 className='uppercase font-poppins text-[20px]  font-bold leading-[40px]'>FREE AND FAST DELIVERY</h1>
                            <p className='text-[14px] font-poppins'>Free delivery for all orders over $140</p>


                        </div>


                        <div className="w-[33.33%] flex flex-col  items-center  gap-[10px] md:w-[50%] sm:w-full my-[20px] sm:bg-[#f5f5f5] sm:py-[10px]">


                            <div className="w-[80px] h-[80px]"><img src={bus} alt="image" className='w-full h-full object-contain' /></div>
                            <h1 className='uppercase font-poppins text-[20px]  font-bold leading-[40px]'>FREE AND FAST DELIVERY</h1>
                            <p className='text-[14px] font-poppins'>Free delivery for all orders over $140</p>


                        </div>




                        <div className="w-[33.33%] flex flex-col  my-[20px]  items-center gap-[10px] md:w-[50%] sm:w-full sm:bg-[#f5f5f5] sm:py-[10px]">


                            <div className="w-[80px] h-[80px]"><img src={bus} alt="image" className='w-full h-full object-contain' /></div>
                            <h1 className='uppercase font-poppins text-[20px]  font-bold leading-[40px]'>FREE AND FAST DELIVERY</h1>
                            <p className='text-[14px] font-poppins'>Free delivery for all orders over $140</p>


                        </div>


                    </div>





                </div>


            </div>

        </>
    )
}

export default About_last_cart
