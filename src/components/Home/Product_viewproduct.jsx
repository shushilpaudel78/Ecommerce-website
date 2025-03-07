import React from 'react'
import View_cart from '../common/View_cart';
import Red_button from '../common/Red_button';

const Product_viewproduct = () => {

    return (
        <>
            <div className="w-full h-auto my-[20px] py-[20px] sm:my-[0px]" >
                <div className="max-w-[1200px] m-auto">

                    <div className="flex flex-wrap mx-[10px] flex-row">
                        <View_cart />
                    </div>

                    <div className="w-full flex justify-center my-10 sm:my-2">
                        <Red_button name="View All the product" />
                    </div>

                </div>
            </div>


        </>
    )
}

export default Product_viewproduct
