import React from 'react'
import Speaker from '/img/product/speaker.png'

const Product_speaker = () => {
    return (
        <>

            <div className="w-full h-auto my-[20px] py-[20px] ">
                <div className="max-w-[1200px] m-auto">
                    <div className="flex bg-black p-[5px]">


                        <div className="w-[45%]">

                            <div className="flex h-auto w-full flex-col ml-[40px] mt-[80px]">
                                <p className='text-[16px] font-poppins text-[#00FF66] font-normal'>Categories</p>

                                <h1 className='text-[48px] font-poppins font-semibold text-white w-[80%]'>Enhance Your Music Experience</h1>

                                <div className="flex text-black gap-[10px] text-center text-[10px] font-poppins my-[20px] font-semibold">

                                    <p className='bg-white rounded-[60px] w-[70px] p-[20px]'>23 Days</p>
                                    <p className='bg-white rounded-[60px] w-[70px] p-[20px]'>05 Hour</p>
                                    <p className='bg-white rounded-[60px] w-[70px] p-[20px]'>59 Minutes</p>
                                    <p className='bg-white rounded-[60px] w-[70px] p-[20px]'>35 Seconds</p>


                                </div>
                                <div className="my-[40px]">
                                    <button className='bg-[#00FF66] text-[white] px-[20px] py-[10px] rounded-[10px]'>Buy Now</button>

                                </div>

                            </div>



                        </div>


                        <div className="w-[55%] h-auto">

                            <div className="w-full h-auto">

                                <div className="w-[600px] h-[420px]"><img className="w-full h-full object-cover" src={Speaker} alt="Speaker" /></div>

                            </div>

                        </div>

                    </div>



                </div>

            </div>



        </>
    )
}

export default Product_speaker
