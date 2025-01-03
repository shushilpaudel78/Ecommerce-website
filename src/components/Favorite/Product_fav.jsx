import React from 'react'
import Ru_button from '../common/Ru_button'
import Wishlist_cart from '../common/Wishlist_cart'


const Product_fav = () => {
    return (
        <>

            <div className="w-full h-full my-[10px] py-[10px] px-[10px]">
                <div className="max-w-[1200px] m-auto">
                    <div className="flex justify-between my-5">

                        <p className='text-[16px] font-poppins font-normal'>Wishlist (4)</p>
                        <Ru_button name="Move All To Blog" />

                    </div>
                    <div className="flex flex-wrap">

                        <Wishlist_cart />
                        <Wishlist_cart />
                        <Wishlist_cart />
                        <Wishlist_cart />


                    </div>



                    <div className="flex items-center  justify-between px-[10px] py-[20px] my-10">
                        <div className="flex gap-3 items-center  ">

                            <div className="w-[30px] h-[40px] bg-red-500" ></div>
                            <p className='font-poppins  text-[16px] font-semibold'>Just For You</p>

                        </div>
                        <Ru_button name="See All" />

                    </div>


                    <div className="flex flex-wrap">
                        <Wishlist_cart />
                        <Wishlist_cart />
                        <Wishlist_cart />
                        <Wishlist_cart />
                    </div>

                </div>

            </div>


        </>
    )
}

export default Product_fav
