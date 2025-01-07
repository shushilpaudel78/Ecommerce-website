import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Our_cart from '../common/ShopingCart';
import Red_button from '../common/Red_button';
import { LeftButton, RightButton } from '../common/LeftRightButton';

const Product_ours = () => {
    return (
        <>

            <div className="w-full h-auto my-[20px] py-[20px] sm:my-0" >
                <div className="max-w-[1200px] m-auto">



                    <div className="flex justify-between items-center my-[20px] px-[10px]">
                        <div className="flex flex-col">
                            <p className='font-poppins  text-[16px] font-semibold text-black'>Our Products</p>
                            <h1 className='text-[30px] font-grotesque font-semibold text-textBlue'>Explore Our Products</h1>
                        </div>



                        <div className="flex gap-[10px]">

                            <LeftButton />
                            <RightButton />


                        </div>

                    </div>






                    <div className="flex flex-wrap px-[10px]">
                        <Our_cart />



                    </div>


                    <div className='flex justify-center my-[10px]'>

                        <Red_button name="View All Products" />


                    </div>



                </div>

            </div>




        </>
    )
}

export default Product_ours
