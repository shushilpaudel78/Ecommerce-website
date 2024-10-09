import React from 'react'




const Catagory_cart = () => {

  const Data = [
    {
      id: 1,
      img: "/img/product/cellphone.png"
    },
    {
      id: 2,
      img: "/img/product/cellphone.png"
    },
    {
      id: 3,
      img: "/img/product/cellphone.png"
    },
    {
      id: 4,
      img: "/img/product/cellphone.png"
    },
    {
      id: 5,
      img: "/img/product/cellphone.png"
    },
    {
      id: 6,
      img: "/img/product/cellphone.png"
    }

  ]
  return (

    <>



  

          {Data.map((data) => (

            <div className="w-[16.66%] h-auto hover:bg-[#DB4444] md:w-[25%] sm:w-[50%]">
              <div className="flex items-center justify-center  border-[2px] m-[10px]">

                <div className="w-[56px] h-[56px] m-[50px]"> <img className='w-full h-full object-cover' src={data.img} alt="cellphone" /></div>


              </div>

            </div>

          ))}












    </>
  )
}

export default Catagory_cart
