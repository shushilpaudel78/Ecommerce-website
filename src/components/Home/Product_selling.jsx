import React from 'react'
import Selling_cart from '../common/Selling_cart'
import Red_button from '../common/Red_button'
import { products } from '../constants/DataApi';


const Product_selling = () => {
    return (
        <>

            <div className="w-full h-full my-[40px] py-[40px] sm:my-0 sm:py-3">

                <div className="max-w-[1200px] m-auto">

                    <div className="flex justify-between items-center py-5">
                        <div className="flex flex-col">
                            <p className='font-poppins  text-[16px] font-medium text-black'>This Month</p>
                            <h1 className='text-[30px] font-grotesque font-semibold text-textBlue' >Best Selling Products</h1>
                        </div>

                        <div className="flex gap-[10px]">
                            <Red_button name="View All" />
                        </div>
                    </div>


                    <div className="flex flex-wrap">
                        {
                            products?.map((item, i) => (
                                <div key={i} className="w-[25%]  md:w-[50%] sm:w-[100%] px-2">
                                    <Selling_cart name={item.name}  price={item.price}  img={item.img}/>
                                </div>

                            ))
                        }

                    </div>


                </div>

            </div>

        </>
    )
}

export default Product_selling
