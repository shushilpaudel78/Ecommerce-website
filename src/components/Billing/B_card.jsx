import React from 'react'
import Red_button from '../common/Red_button'
const B_card = () => {
    return (
        <>
            <div className="p-[20px] my-8">
                <div className="flex flex-col gap-6 my-7 px-20 md:px-2">

                    <div className="flex w-full h-auto justify-between text-[16px] font-normal font-poppins items-center">
                        <div className="flex gap-4 items-center">

                            <div className="w-[54px]  h-[54px]">
                                <img src='/img/product/joystick.png' alt="computer" className='w-full h-full object-contain' />
                            </div>
                            <p>LCD Monitor</p>
                        </div>
                        <p>$650</p>

                    </div>




                    <div className="flex w-full h-auto justify-between text-[16px] font-normal font-poppins items-center">
                        <div className="flex gap-4 items-center">
                            <div className="w-[54px]  h-[54px]">
                                <img src='/img/product/joystick.png' alt="computer" className='w-full h-full object-contain' />
                            </div>
                            <p>LCD Monitor</p>
                        </div>
                        <p>$650</p>

                    </div>
                </div>



                <div className="flex flex-col gap-5 px-20 md:px-5">
                    <div className="flex justify-between border-b-2 text-[16px] font-normal font-poppins pb-3">
                        <p>Subtotal</p>
                        <p>$123</p>

                    </div>
                    <div className="flex justify-between border-b-2 text-[16px] font-normal font-poppins pb-3">
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>

                    <div className="flex justify-between text-[16px] font-normal font-poppins">
                        <p>Total</p>
                        <p>$1750</p>
                    </div>

                </div>

                <div className="flex justify-between my-8 font-poppins text-[16px] px-20 md:px-5">
                    <div className="flex  flex-col gap-5">
                        <div className="flex gap-2">
                            <input type="radio" name='c' />
                            <p>bank</p>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name='c'className='text-[20px]' />
                            <p>cash on delivery</p>

                        </div>


                    </div>

                    <div className="flex">

                        <div className="w-[42px] h-[28px]"><img src='/img/billing/Mastercard.png' alt="atm pic" className='w-full h-full object-contain' /></div>
                        <div className="w-[42px] h-[28px]"><img src='/img/billing/Mastercard.png' alt="atm pic" className='w-full h-full object-contain' /></div>
                        <div className="w-[42px] h-[28px]"><img src='/img/billing/Mastercard.png' alt="atm pic" className='w-full h-full object-contain' /></div>

                    </div>

                </div>


                <div className="pl-20 md:pl-0">
                    <div className="flex justify-between flex-wrap md:flex-col md:gap-5 sm:px-[10px]">
                        <input type="text" className='border-[2px] md:h-[50px] px-5 border-black rounded-sm' placeholder='Coupan code' />

                        <div className="div">
                            <Red_button name="Apply Coupan" />
                        </div>
                    </div>

                    <div className="my-[20px] sm:px-[10px]">
                        <Red_button name="Place Order" />
                    </div>
                </div>




            </div>

        </>
    )
}

export default B_card
