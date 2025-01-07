import React from 'react'

const Product_features = () => {
    return (
        <>
            <div className="w-full h-auto px-[10px]">
                <div className="max-w-[1200px] m-auto">





                    <div className="flex justify-start items-center my-[20px] px-[10px]">
                        <div className="flex flex-col">
                            <p className='font-poppins  text-[16px] font-semibold text-black'>Featured</p>
                            <h1 className='text-[30px] font-grotesque text-textBlue font-semibold'>New Arrival</h1>
                        </div>


                    </div>





                    <div className="flex md:flex-wrap px-[10px] md:flex-col md:gap-[10px]">
                        <div className="w-[50%] h-auto  md:w-full">
                            <div className="bg-black mr-8 relative md:mr-0 z-0 overflow-hidden">
                                <div className="w-full h-[600px] sm:h-[400px]">  <img src='/img/product/joystickblack.png' alt="img" className='w-full h-full object-cover' /></div>

                                <div className='absolute flex bottom-[30px] left-5 text-white flex-col'>
                                    <h1 className='text-[24px] font-poppins font-normal' >PlayStation 5</h1>
                                    <p className='text-[14px] font-poppins '> Black and White version of the PS5 coming out on sale.</p>
                                    <button className='text-start border-b-[2px] w-[80px] text-[16px] font-poppins'>Shop Now</button>
                                </div>


                            </div>

                        </div>


                        <div className="w-[50% h-auto] ">
                            <div className="w-full relative bg-black z-0">

                                <div className="img  w-[80%] h-[286px] md:w-full">
                                    <img src='/img/product/girlwithblackhat.png' alt="Girl img" className='w-full h-full object-cover' />
                                </div>

                                <div className='absolute flex bottom-[34px] left-5 text-white flex-col overflow-hidden'>
                                    <h1 className='text-[24px] font-poppins font-normal' >Women’s Collections5</h1>
                                    <p className='text-[14px] font-poppins '> Featured woman collections that give you another vibe.</p>
                                    <button className='text-start border-b-[2px] max-w-[80px] text-[16px] font-poppins'>Shop Now</button>

                                </div>


                            </div>


                            <div className="w-full flex mt-[30px]">

                                <div className="w-[50%]  relative pr-5">
                                    <div className='w-full h-auto bg-black'>
                                        <div className="img w-[100%] h-[284px]">
                                            <img src='/img/product/battery.png' alt="speakers" className='w-full  h-full object-cover' />

                                        </div>
                                        <div className='absolute flex bottom-[20px] left-5 text-white flex-col'>
                                            <h1 className='text-[24px] font-poppins font-normal text-textBlue' >Speakers</h1>
                                            <p className='text-[14px] font-poppins font-normal text-textBlue '>Amazon wireless speakers</p>
                                            <button className='text-start border-b-[2px] max-w-[80px] text-[16px] font-poppins'>Shop Now</button>

                                        </div>
                                    </div>

                                </div>


                                <div className="w-[50%] h-auto relative">

                                    <div className='w-full h-auto bg-black'>


                                        <div className="img  w-[100%] h-[284px]" >
                                            <img src='/img/product/perfume.png' alt="perfume" className='w-full  h-full object-cover' />

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
