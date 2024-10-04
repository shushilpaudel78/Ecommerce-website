import React from 'react'


const last_cart = () => {

    const Data = [
        {
            photo: "/img/about/bus.png",
            finfo: "FREE AND FAST DELIVERY",
            sinfo: "Free delivery for all orders over $140"


        },
        {
            photo: "/img/about/bus.png",
            finfo: "FREE AND FAST DELIVERY",
            sinfo: "Free delivery for all orders over $140"


        },
        {
            photo: "/img/about/bus.png",
            finfo: "FREE AND FAST DELIVERY",
            sinfo: "Free delivery for all orders over $140"


        }




    ]




    return (
        <>

            {
                Data.map((data) => (




                    <div className="w-[33.33%] flex flex-col  my-[20px]  items-center gap-[10px] md:w-[50%] sm:w-full sm:bg-[#f5f5f5] sm:py-[10px]">


                        <div className="w-[80px] h-[80px]"><img src={data.photo} alt="image" className='w-full h-full object-contain' /></div>
                        <h1 className='uppercase font-poppins text-[20px]  font-bold leading-[40px]'>{data.finfo}</h1>
                        <p className='text-[14px] font-poppins'>{data.sinfo}</p>


                    </div>

                ))
            }

        </>
    )
}

export default last_cart
