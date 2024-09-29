import React from 'react'
import blackjoystick from '/img/product/joystickblack.png'

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





                    <div className="flex">

                        <div className="w-[50%] h-auto">

                            <div className='w-full h-auto relative'>

                            <div className="pic w-[570px] h-[600px]" >

                                <img src={blackjoystick} alt="img" className='w-full h-full object-cover'  />
                            </div>

                            <div className='absolute flex'>
                                <h1>PlayStation 5</h1>
                                <p> Black and White version of the PS5 coming out on sale.</p>
                                
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
