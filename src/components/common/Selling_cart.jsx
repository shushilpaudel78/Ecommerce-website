import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import AddtoCartButton from './AddtoCartButton';
import 'swiper/css';



const Selling_cart = ({img, name, price}) => {


    const [store, setStore] = useState([])

    const AddtoCart = (product) => {
        const pdata = [...store, product];
        setStore(pdata);
        localStorage.setItem('cartData', JSON.stringify(pdata))

    }


    return (
        <>

            <div className="w-full bg-lightBlue">
                <div className="flex justify-between py-5 px-3">
                    <p className='bg-red-600 w-[40px] h-[33px] text-center text-white font-poppins p-[5px]'>discount</p>
                    <div className="flex flex-col gap-4 text-[30px]">
                        <FaRegHeart />
                        <IoEyeSharp />

                    </div>

                </div>


                <div className="w-[190px] h-[180px] ml-10  sm:w-[250px] sm:h-[200px]"><img src={img} alt="product photo" className='w-full h-full object-cover' /></div>
                <div>
                    <AddtoCartButton name="Add to Cart" />
                </div>

            </div>


            <div className="flex flex-col p-5 font-poppins text-[16px] gap-2">
                <p className='font-semibold'>{name}</p>
                <p className='text-red-500'>{price} <span className='text-[#686666] mx-2 line-through'></span></p>
                <div className="flex  text-yellow-500">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <p>(563)</p>
                </div>

            </div>

        </>
    )
}

export default Selling_cart
