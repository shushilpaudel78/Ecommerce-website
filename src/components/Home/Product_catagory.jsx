import React from 'react'
import Catagory_cart from '../common/Catagory_cart'
import { LeftButton, RightButton } from '../common/LeftRightButton'

const Product_catagory = () => {
    return (
        <>

            <div className="w-full h-full my-[40px] py-[20px]">
                <div className="max-w-[1200px] m-auto">




                    <div className="flex justify-between items-center my-[20px] px-[10px]">
                        <div className="flex flex-col">
                            <p className='font-poppins  text-[16px] font-semibold text-black'>Categories</p>
                            <h1 className='text-[30px] font-grotesque font-semibold text-textBlue'>Browse By Category</h1>
                        </div>
                        <div className="flex gap-[10px]">
                            <LeftButton />
                            <RightButton />

                        </div>

                    </div>



                    <div className=" w-full h-auto flex flex-wrap  px-[10px] ">
                        <Catagory_cart />


                    </div>




                </div>

            </div>



        </>
    )
}

export default Product_catagory
