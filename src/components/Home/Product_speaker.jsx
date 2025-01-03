import React from 'react'

const Product_speaker = () => {
    return (
        <>

            <div className="w-full h-auto my-[20px] py-[20px] px-[10px] sm:my-0 ">
                <div className="max-w-[1200px] m-auto">
                    <div className="flex bg-black p-[5px] flex-wrap">


                        <div className="w-[45%] md:w-full">

                            <div className="flex h-auto w-full flex-col ml-[40px] mt-[80px] md:ml-0 sm:mt-4">
                                <p className='text-[16px] font-poppins text-[#00FF66] font-normal my-[10px] sm:text-center'>Categories</p>

                                <h1 className='text-[48px] font-poppins font-semibold text-white w-[80%] sm:text-center sm:w-full'>Enhance Your Music Experience</h1>

                                <div className="flex flex-wrap text-black gap-[10px] text-center text-[10px] font-poppins my-[20px] font-semibold sm:justify-center">

                                    <p className='bg-white rounded-[60px] w-[70px] p-[20px]'>23 Days</p>
                                    <p className='bg-white rounded-[60px] w-[70px] p-[20px]'>05 Hour</p>
                                    <p className='bg-white rounded-[60px] w-[70px] p-[20px]'>59 Minutes</p>
                                    <p className='bg-white rounded-[60px] w-[70px] p-[20px]'>35 Seconds</p>


                                </div>


                            </div>



                        </div>


                        <div className="w-[55%] h-auto md:w-full">

                            <div className="w-full h-auto mt-[80px] sm:mt-5">

                                <div className="w-[90%] h-[320px]"><img className="w-full h-full object-cover sm:object-contain" src='/img/product/speaker.png' alt="Speaker" /></div>

                            </div>

                        </div>

                        <div className="my-[40px]">
                            <button className=' mx-9 bg-[#00FF66] text-[white] px-[30px] py-[15px] rounded-[10px] font-poppins text-[16px]'>Buy Now</button>

                        </div>

                    </div>



                </div>

            </div>



        </>
    )
}

export default Product_speaker
