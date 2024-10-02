import React from 'react'
import View_cart from '../Cart/product _cart/View_cart';
import Red_button from '../Button/Red_button';

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

                            <Red_button name="View All the product" />

                        </div>


                    </div>







                </div>


            </div>


        </>
    )
}

export default Product_viewproduct
