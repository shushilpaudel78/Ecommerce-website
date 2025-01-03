import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import comppic from "/img/product/computer.png"

const Ourn_cart = () => {

    const products = [
        {
            id: 1,
            img: "/img/product/computer.png",
            name: "D Gaming Laptop",
            price: "$700",
            rating: "(88)"


        }
    ]
    return (
        <>

            {
                products.map((product) => (


                    <div className="w-[25%]  md:w-[50%] sm:w-full hover:scale-105">

                        <div className="bg-[#F5F5F5] mx-3 my-3">


                            <div className="flex justify-end px-6 py-5">

                                <div className="flex flex-col gap-4 text-[30px] left ">
                                    <FaRegHeart />
                                    <IoEyeSharp />

                                </div>


                            </div>


                            <div className="w-[190px] h-[180px] ml-10 "><img src={product.img} alt="product photo" className='w-full h-full object-cover' /></div>

                            <button className='w-full py-[10px] text-white bg-black font-poppins text-[16px]'>Add to cart</button>


                        </div>


                        <div className="flex flex-col p-5 font-poppins text-[16px] gap-2">
                            <p className='font-semibold'>{product.name}</p>
                            <div className="flex gap-4">

                                <p className='text-red-500'>{product.price} </p>
                                <div className="flex  text-yellow-500">
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <p>{product.rating}</p>
                                </div>

                            </div>


                        </div>
                    </div>


                ))
            }




        </>
    )
}

export default Ourn_cart
