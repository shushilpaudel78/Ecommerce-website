import React from 'react'
import blackjoystick from '/img/product/joystickblack.png'
import girlsblack from '/img/product/girlwithblackhat.png'
import speaker from '/img/product/battery.png'
import perfume from '/img/product/perfume.png'


const Product_features = () => {
    return (
        <>
            <div className="w-full h-auto">
                <div className="max-w-[1200px] m-auto">



                    <div className="flex items-center gap-3 px-[10px]">

                        <div className="w-[30px] h-[40px] bg-red-500" ></div>
                        <p className='font-poppins  text-[16px] font-semibold'>Featured</p>

                    </div>


                    <div className="flex justify-start items-center my-[20px] px-[10px]">

                        <h1 className='text-[30px] font-poppins font-semibold'>New Arrival</h1>



                    </div>





                    <div className="flex flex-wrap px-[10px] md:flex-col md:gap-[10px]">

                        <div className="w-[50%] h-auto ">

                            <div className='w-full h-auto relative pr-8 bg-white'>
                                <div className="w-full bg-black h-full">

                                    <div className=" w-[90%] h-[600px]" >

                                        <img src={blackjoystick} alt="img" className='w-full h-full object-cover' />
                                    </div>


                                    <div className='absolute flex bottom-[30px] left-5 text-white flex-col'>

                                        <h1 className='text-[24px] font-poppins font-normal' >PlayStation 5</h1>
                                        <p className='text-[14px] font-poppins '> Black and White version of the PS5 coming out on sale.</p>
                                        <button className='text-start border-b-[2px] max-w-[80px] text-[16px] font-poppins'>Shop Now</button>


                                    </div>

                                </div>

                            </div>


                        </div>


                        <div className="w-[50% h-auto] ">

                            <div className="w-full relative bg-black">

                                <div className="img  w-[80%] h-[286px] md:w-full">
                                    <img src={girlsblack} alt="Girl img" className='w-full h-full object-cover' />
                                </div>

                                <div className='absolute flex bottom-[34px] left-5 text-white flex-col'>
                                    <h1 className='text-[24px] font-poppins font-normal' >Women’s Collections5</h1>
                                    <p className='text-[14px] font-poppins '> Featured woman collections that give you another vibe.</p>
                                    <button className='text-start border-b-[2px] max-w-[80px] text-[16px] font-poppins'>Shop Now</button>

                                </div>


                            </div>


                            <div className="w-full flex mt-[30px]">

                                <div className="w-[50%]  relative pr-5">

                                    <div className='w-full h-auto bg-black'>

                                        <div className="img w-[100%] h-[284px]">
                                            <img src={speaker} alt="speakers" className='w-full  h-full object-cover' />

                                        </div>

                                        <div className='absolute flex bottom-[20px] left-5 text-white flex-col'>
                                            <h1 className='text-[24px] font-poppins font-normal' >Speakers</h1>
                                            <p className='text-[14px] font-poppins '>Amazon wireless speakers</p>
                                            <button className='text-start border-b-[2px] max-w-[80px] text-[16px] font-poppins'>Shop Now</button>

                                        </div>
                                    </div>

                                </div>


                                <div className="w-[50%] h-auto relative">

                                    <div className='w-full h-auto bg-black'>


                                        <div className="img  w-[100%] h-[284px]" >
                                            <img src={perfume} alt="perfume" className='w-full  h-full object-cover' />

                                        </div>


                                        <div className='absolute flex bottom-[20px] left-5 text-white flex-col'>
                                            <h1 className='text-[24px] font-poppins font-normal' >Perfume</h1>
                                            <p className='text-[14px] font-poppins '>GUCCI INTENSE OUD EDP</p>
                                            <button className='border-b-[2px] text-start max-w-[80px] text-[16px] font-poppins'>Shop Now</button>

                                        </div>

                                    </div>



                                </div>



                            </div>





                        </div>






                    </div>





                </div>

            </div>

        </>
    )
}

export default Product_features
