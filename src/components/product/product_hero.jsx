import React from 'react'
import Product_sidebar from './product_sidebar'
import applogo from '/img/product/applelogo.png'

const product_hero = () => {
    return (
        <>

            <div className="w-full h-auto">
                <div className="max-w-[1200px] m-auto">
                    <div className="flex">

                        <div className="w-[20%]  h-auto">
                            <Product_sidebar />

                        </div>

                        <div className="w-[80%]  h-auto">

                            <div className="flex flex-row  bg-black text-white p-[10px]">

                                <div className="w-[50%]">

                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <div className="w-[40px] h-[49px]"><img src={applogo} alt="logo" /></div>
                                            <p className=' font-poppins text-[16px] font-medium '>Iphone 14 users</p>
                                        </div>

                                        <h1  className='font-poppins text-[48px] font-medium '>Up to 10% off Voucher</h1>

                                        <button>Shop Now</button>

                                    </div>


                                </div>

                                <div className="w-[50%]">
                                    .

                                </div>


                            </div>


                        </div>


                    </div>


                </div>

            </div>





        </>
    )
}

export default product_hero
