import React from 'react'
import bus from '/img/about/bus.png'


const last_cart = () => {
    return (
        <>


            <div className="w-[33.33%] flex flex-col  my-[20px]  items-center gap-[10px] md:w-[50%] sm:w-full sm:bg-[#f5f5f5] sm:py-[10px]">


                <div className="w-[80px] h-[80px]"><img src={bus} alt="image" className='w-full h-full object-contain' /></div>
                <h1 className='uppercase font-poppins text-[20px]  font-bold leading-[40px]'>FREE AND FAST DELIVERY</h1>
                <p className='text-[14px] font-poppins'>Free delivery for all orders over $140</p>


            </div>

        </>
    )
}

export default last_cart
