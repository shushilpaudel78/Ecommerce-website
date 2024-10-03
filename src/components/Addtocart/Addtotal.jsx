import React from 'react'
import Red_button from '../Button/Red_button'

const Addtotal = () => {
  return (
    <>


      <div className="flex w-full h-auto flex-col border-black font-poppins text-[16px] gap-5 border-[2px] p-[30px]" >
        <h1 className='font-semibold'> Cart Total </h1>

        <div className="flex border-b-[3px] justify-between">
          <p>Sub Total</p>
          <p>$350</p>
        </div>

        <div className="flex border-b-[3px] justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>


        <div className="flex justify-between">
          <p>Total</p>
          <p>$1750</p>
        </div>
        <div className="div">



        <Red_button name="Process to  checkout" />


        </div>




      </div>

    </>
  )
}

export default Addtotal
