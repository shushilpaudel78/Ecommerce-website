import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const View_cart = () => {

 

    const products = [
        {
            id: 1,
            discount_p: "40%",
            img: "/img/product/joystick.png",
            name: "HAVIT HV-G92 Gamepad",
            price: "$120",
            previous_price: "$160",
            rating: "(90)"

        },
        {
            id: 2,
            discount_p: "60%",
            img: "/img/product/joystick.png",
            name: "HAVIT HV-G92 Gamepad",
            price: "$120",
            previous_price: "$160",
            rating: "(90)"

        },
        {
            id: 3,
            discount_p: "40%",
            img: "/img/product/joystick.png",
            name: "HAVIT HV-G92 Gamepad",
            price: "$120",
            previous_price: "$160",
            rating: "(90)"

        },
        {
            id: 4,
            discount_p: "50%",
            img: "/img/product/joystick.png",
            name: "HAVIT HV-G92 Gamepad",
            price: "$120",
            previous_price: "$160",
            rating: "(90)"

        }
   
       
    ]


    return (
        <>
            {
                products.map((product) => (

                 

                    <div className="w-[25%]  md:w-[50%] sm:w-[100%] hover:scale-105">

                        <div className="bg-[#F5F5F5] mx-3 my-3">


                            <div className="flex justify-between px-6 py-5">

                                <p className='bg-red-600 w-[40px] h-[33px] text-center text-white font-poppins p-[5px]'>{product.discount_p}</p>
                                <div className="flex flex-col gap-4 text-[30px]">
                                    <FaRegHeart />
                                    <IoEyeSharp />

                                </div>


                            </div>


                            <div className="w-[190px] h-[180px] ml-10 "><img src={product.img} alt="product photo" className='w-full h-full object-cover' /></div>

                            <button onClick="AddtoStorage(1, 'shushil', 'paudel')" className='w-full py-[10px] text-white bg-black font-poppins text-[16px]'>Add to cart</button>


                        </div>


                        <div className="flex flex-col p-5 font-poppins text-[16px] gap-2">
                            <p className='font-semibold'>{product.name}</p>
                            <p className='text-red-500'>{product.price} <span className='text-[#686666] mx-2 line-through'>{product.previous_price}</span></p>
                            <div className="flex  text-yellow-500">
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <p>{product.rating}</p>
                            </div>

                        </div>
                    </div>





                ))
            }





        </>
    )
}

export default View_cart
