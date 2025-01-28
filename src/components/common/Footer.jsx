import React from 'react'
import { BsSendArrowDown } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>

        <div className="w-full h-full py-[40px] bg-primaryBlue  text-secondaryWhite p-[5px] lg:px-[20px]">
        <div className="max-w-[1200px] m-auto">

            <div className="flex w-full h-auto justify-start flex-wrap  text-secondaryWhite leading-[40px] py-[10px]">

                <div className="w-[20%] leading-[40px] lg:w-[30%] md:w-[50%] ">
                    <h1 className='font-poopins font-bold text-[20px] text-secondaryWhite leading-[60px]'>Exclusive</h1>
                    <h3 className='text-[16px] font-normal font-sans text-secondaryWhite/90'>Subscribe</h3>
                    <p className='text-[16px] font-normal font-sans text-secondaryWhite/90'>Get 10% off your first order</p>
                    
                    <div className=" w-[180px] h-[40px] my-5  rounded-[10px] flex items-center border px-2 ">
                        <input type="text" className='w-full h-full text-secondaryWhite pl-[10px] pr-[40px]  bg-primaryBlue/40 outline-none border-none' />
                        <BsSendArrowDown className=' text-red top-[11px] right-[17px] text-[20px]' />

                    </div>

                    
                </div>


                <div className="w-[20%] leading-[40px]  lg:w-[30%]  md:w-[50%] sm:w-[100%]">
                    <h1 className='font-poopins font-bold text-[20px] leading-[60px]'>Support</h1>
                    <p className='w-[70%] leading-[20px] pt-[7px] text-[16px] font-normal font-sans text-secondaryWhite/90'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className='text-[16px] font-normal font-sans text-secondaryWhite/90'>exclusive@gmail.com</p>
                    <p className='text-[16px] font-normal font-sans text-secondaryWhite/90'>+88015-88888-9999</p>
                </div>


                <div className="w-[20%] leading-[40px] lg:w-[30%] md:w-[50%] sm:w-[100%]">
                    <h1 className='font-poopins text-[20px] font-bold text-secondaryWhite  leading-[60px]' >Account</h1>

                    <ul className='flex  flex-col gap-[2px] text-[16px] font-normal font-sans text-secondaryWhite/90'>
                        <li><Link to='/myaccount'>My Account</Link></li>
                        <li><Link to='/login'>Login / Register</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/wishlist'>Wishlist</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        

                    </ul>

                </div>

                <div className="w-[20%] leading-[40px] lg:w-[30%] md:w-[50%] sm:w-[100%]">
                    <h1 className='font-poopins text-[20px] text-secondaryWhite leading-[60px] font-bold'  >Quick  link</h1>


                    
                    <ul className='text-[16px] font-normal font-sans text-secondaryWhite/90'>
                        <li><Link element ='' path=''>Privacy Policy</Link></li>
                        <li><Link element ='' path=''>Term of use</Link></li>
                        <li><Link element ='' path=''>FAQ</Link></li>
                        <li><Link element ='' path=''>Contact</Link></li>
                        

                    </ul>
                </div>


                <div className="w-[20%] leading-[40px] lg:w-[30%] md:w-[50%] sm:w-[100%]">
                    <h1 className='font-poopins text-[20px] font-bold leading-[60px] text-secondaryWhite' >Download App</h1>
                    <p className=' text-[16px] font-normal font-sans text-secondaryWhite/90 '>Save $3 with App New User Only</p>

                    <div className="flex gap-[10px]">

                        <div className="w-[80px] h-[80px] "><img src='/img/footer/qrcode.png' alt=""  className='w-full h-full object-contain'/></div>


                        <div className="flex flex-col gap-[5px]">

                            <div className="w-[104px] h-[38px]"><img src='/img/footer/AppStore.png' alt="abc" className='w-full h-full object-contain' /></div>
                            <div className="w-[104px] h-[38px]"><img src='/img/footer/GooglePlay.png' alt="bcd" className='w-full h-full object-contain' /></div>


                        </div>


                    </div>


                </div>







            </div>




        </div>



    </div>


    <p className="text-center text-secondaryWhite/90 font-poppins w-full [20px] pt-[40px] pb-[30px] text-[16px] bg-primaryBlue"> © Copyright Rimel 2022. All right reserved</p>





      
    </>
  )
}

export default Footer
