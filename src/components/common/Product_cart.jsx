import React from 'react'
import shopIcon from '/img/about/shop_icon.png'


const Product_cart = () => {

    const Data = [
        {
            id:1,
            photo: "/img/about/shop_icon.png",
            price: "10.5k",
            info: "Sallers active our site"

        },
        {
            id:2,
            photo: "/img/about/shop_icon.png",
            price: "10.5k",
            info: "Sallers active our site"

        },
        {
            id:3,
            photo: "/img/about/shop_icon.png",
            price: "10.5k",
            info: "Sallers active our site"

        },
        {
            id:4,
            photo: "/img/about/shop_icon.png",
            price: "10.5k",
            info: "Sallers active our site"

        }
    ]


    return (
        <>

            {
                Data.map((data) => (


                    <div className="w-[25%] my-[10px]  h-auto  hover:bg-[#DB4444] hover:text-white cursor-pointer md:w-[50%] sm:w-[100%]">

                        <div className="flex flex-col justify-center items-center w-full h-full p-[5px] border-[2px] py-[50px] mx-[10px]">
                            <div className="w-[50px] h-[50px]"><img src={data.photo} alt="icon shop" className='w-full h-full object-contain' /></div>
                            <h1 className='font-poppins font-semibold text-[32px]'>{data.price}</h1>
                            <p className='font-poppins font-normal text-[16px]'>{data.info}</p>
                        </div>

                    </div>

                ))
            }


        </>
    )
}

export default Product_cart
