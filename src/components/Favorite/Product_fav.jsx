import React from 'react'
import Ru_button from '../Button/Ru_button'
import Wishlist_cart from '../Cart/product _cart/Wishlist_cart'


const Product_fav = () => {
    return (
        <>

            <div className="w-full h-full my-[10px] py-[10px] px-[10px]">

                <div className="max-w-[1200px] m-auto">





                    <div className="flex flex-wrap">

                        <Wishlist_cart />
                        <Wishlist_cart />
                        <Wishlist_cart />
                        <Wishlist_cart />


                    </div>


                    <div className="flex items-center gap-3 px-[10px]">

                        <div className="w-[30px] h-[40px] bg-red-500" ></div>
                        <p className='font-poppins  text-[16px] font-semibold'>Just For You</p>

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
