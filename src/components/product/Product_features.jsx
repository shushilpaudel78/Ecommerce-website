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



                    <div className="flex items-center gap-3">

                        <div className="w-[30px] h-[40px] bg-red-500" ></div>
                        <p className='font-poppins  text-[16px] font-semibold'>Featured</p>

                    </div>


                    <div className="flex justify-start items-center my-[20px]">

                        <h1 className='text-[30px] font-poppins font-semibold'>New Arrival</h1>



                    </div>





                    <div className="flex gap-8">

                        <div className="w-[50%] h-auto bg-black">

                            <div className='w-full h-auto relative'>

                                <div className="pic w-[570px] h-[600px]" >

                                    <img src={blackjoystick} alt="img" className='w-full h-full object-cover' />
                                </div>

                                <div className='absolute flex bottom-[30px] text-white flex-col'>

                                    <h1 className='text-[24px] font-poppins font-normal' >PlayStation 5</h1>
                                    <p className='text-[14px] font-poppins '> Black and White version of the PS5 coming out on sale.</p>
                                    <button className='left'>Shop Now</button>


                                </div>

                            </div>


                        </div>


                        <div className="w-[50% h-auto] ">

                            <div className="w-full relative bg-black">

                                <div className="img  w-[432px] h-[286px]">
                                    <img src={girlsblack} alt="Girl img" className='w-full h-full object-cover' />
                                </div>

                                <div className='absolute flex bottom-[34px] text-white flex-col'>
                                    <h1 className='text-[24px] font-poppins font-normal' >Women’s Collections5</h1>
                                    <p className='text-[14px] font-poppins '> Featured woman collections that give you another vibe.</p>
                                    <button>Shop Now</button>

                                </div>


                            </div>


                            <div className="w-full flex my-[20px] gap-6">

                                <div className="w-[50%]  relative">
                                    <div className='w-full h-auto bg-black'>

                                        <div className="img w-[270px] h-[284px]">
                                            <img src={speaker} alt="speakers" className='w-full  h-full object-cover' />

                                        </div>

                                        <div className='absolute flex top-[34px] text-white flex-col'>
                                            <h1 className='text-[24px] font-poppins font-normal' >Speakers</h1>
                                            <p className='text-[14px] font-poppins '>Amazon wireless speakers</p>
                                            <button>Shop Now</button>

                                        </div>
                                    </div>

                                </div>


                                <div className="w-[50%] h-auto relative">

                                    <div className='w-full h-auto bg-black'>


                                        <div className="img  w-[270px] h-[284px]" >
                                            <img src={perfume} alt="perfume" className='w-full  h-full object-cover' />

                                        </div>


                                        <div className='absolute flex top-[34px] text-white flex-col'>
                                            <h1 className='text-[24px] font-poppins font-normal' >Perfume</h1>
                                            <p className='text-[14px] font-poppins '>GUCCI INTENSE OUD EDP</p>
                                            <button>Shop Now</button>

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
