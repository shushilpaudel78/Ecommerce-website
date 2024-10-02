import React from 'react'

import View_cart from './Cart/view_cart';

const Product_viewproduct = () => {



  

    return (
        <>
            <div className="w-full h-auto my-[20px] py-[20px]" >
                <div className="max-w-[1200px] m-auto">

                    <div className="flex flex-wrap mx-[10px]">

                        <View_cart />
                        <View_cart />
                        <View_cart />
                        <View_cart />



                        <div className="w-full flex justify-center my-10">
                            <button className='bg-[#DB4444] text-white py-[10px] px-[20px] rounded-md font-poppins'>View All the product</button>
                        </div>


                    </div>







                </div>


            </div>


        </>
    )
}

export default Product_viewproduct
