import React from 'react'
import Selling_cart from '../common/Selling_cart'
import Red_button from '../common/Red_button'


const Product_selling = () => {
    return (
        <>

            <div className="w-full h-full my-[40px] py-[40px] sm:my-0 sm:py-3">

                <div className="max-w-[1200px] m-auto">

                    <div className="flex items-center gap-3  sm:flex-col sm:items-start px-[10px]">

                        <div className="w-[30px] h-[40px] bg-red-500" ></div>
                        <p className='font-poppins  text-[16px] font-semibold'>This Month</p>

                    </div>


                    <div className="flex justify-between items-center my-[20px] px-[10px]">

                        <h1 className='text-[30px] font-poppins font-semibold'>Best Selling Products</h1>


                        <div className="flex gap-[10px]">

                            <Red_button name="View All" />

                        </div>

                    </div>



                    <div className="flex flex-wrap">
                        <Selling_cart />

                    </div>









                </div>

            </div>





        </>
    )
}

export default Product_selling
