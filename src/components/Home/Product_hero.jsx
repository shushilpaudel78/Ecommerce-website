import React from 'react'
import Product_sidebar from './Product_sidebar'
import ShopButton from '../common/ShopButton';

const Product_hero = () => {
    return (
        <>

            <div className="w-full h-auto px-[10px] py-8">
                <div className="max-w-[1200px] m-auto">
                    <div className="flex">

                        <div className="w-[20%]  h-auto  px-[10px] md:w-[30%] sm:w-[30%]">
                            <Product_sidebar />
                        </div>

                        <div className="w-[80%] h-auto md:w-[70%]">
                            <div className="flex flex-row  bg-black text-white sm:py-4 pl-[5vw] py-4 ">
                                <div className="w-1/2 md:w-full">
                                    <div className="flex flex-col pt-[40px] sm:pl-[10px] sm:items-center ">
                                        <div className="flex items-center gap-8 sm:gap-2 py-5">
                                            <div className="w-[40px] h-[49px]"><img src='/img/product/applelogo.png' alt="logo" /></div>
                                            <p className=' font-poppins text-[16px] font-medium text-secondaryWhite py-3 '>Iphone 14 users</p>
                                        </div>
                                        <h1 className='font-grotesque text-secondaryWhite text-[48px] font-medium  sm:text-[36px] sm:text-center leading-[50px] py-3'>Up to 10% off Voucher</h1>


                                    </div>

                                    <div className='py-3'><ShopButton /></div>

                                </div>

                                <div className="w-1/2 md:hidden">
                                    <div className="w-[100%] h-[352]"><img src='/img/product/applephoto.png' alt="iphone  photo" className='w-full h-full object-cover' /></div>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>





        </>
    )
}

export default Product_hero
