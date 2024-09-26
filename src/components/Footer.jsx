import React from 'react'
import { BsSendArrowDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import appimg from '../assets/img/download-appstore.png'
import gogimg from '../assets/img/GooglePlay.png'
import qimg from '../assets/img/qrcode.png'


const Footer = () => {
  return (
    <>

        <div className="w-full h-full py-[40px] bg-black  text-[#FAFAFA] p-[5px] lg:px-[20px]">
        <div className="max-w-[1200px] m-auto">

            <div className="flex w-full h-auto justify-start flex-wrap  text-[#FAFAFA] leading-[40px]">

                <div className="w-[20%] leading-[40px] lg:w-[30%] md:w-[50%] ">
                    <h1 className='font-poopins text-[24px] leading-[60px]'>Exclusive</h1>
                    <h3 className='text-[16px]'>Subscribe</h3>
                    <p className='text-[16px]'>Get 10% off your first order</p>
                    <div className="relative w-[180px] h-[40px] my-5">
                        <input type="text" className='w-full h-full text-[#FAFAFA] pl-[10px] pr-[40px]  rounded-[10px] bg-black border-[2px]' />
                        <BsSendArrowDown className='absolute  text-red top-[11px] right-[17px] text-[20px]' />

                    </div>

                    
                </div>


                <div className="w-[20%] leading-[40px]  lg:w-[30%]  md:w-[50%] sm:w-[100%]">
                    <h1 className='font-poopins text-[25px] leading-[60px]'>Support</h1>
                    <p className='w-[70%] leading-[20px] pt-[7px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>


                <div className="w-[20%] leading-[40px] lg:w-[30%] md:w-[50%] sm:w-[100%]">
                    <h1 className='font-poopins text-[24px] leading-[60px]' >Account</h1>

                    <ul className='flex  flex-col gap-[2px]'>
                        <li><Link element ='' path=''>My Account</Link></li>
                        <li><Link element ='' path=''>Login / Register</Link></li>
                        <li><Link element ='' path=''>Cart</Link></li>
                        <li><Link element ='' path=''>Wishlist</Link></li>
                        <li><Link element ='' path=''>Shop</Link></li>
                        

                    </ul>

                </div>

                <div className="w-[20%] leading-[40px] lg:w-[30%] md:w-[50%] sm:w-[100%]">
                    <h1 className='font-poopins text-[24px] leading-[60px]'  >Quick  link</h1>


                    
                    <ul>
                        <li><Link element ='' path=''>Privacy Policy</Link></li>
                        <li><Link element ='' path=''>Term of use</Link></li>
                        <li><Link element ='' path=''>FAQ</Link></li>
                        <li><Link element ='' path=''>Contact</Link></li>
                        

                    </ul>
                </div>


                <div className="w-[20%] leading-[40px] lg:w-[30%] md:w-[50%] sm:w-[100%]">
                    <h1 className='font-poopins text-[24px] leading-[60px]' >Download App</h1>
                    <p>Save $3 with App New User Only</p>

                    <div className="flex gap-[10px]">

                        <div className="w-[80px] h-[80px] "><img src={qimg} alt=""  className='w-full h-full object-contain'/></div>


                        <div className="flex flex-col gap-[5px]">

                            <div className="w-[104px] h-[38px]"><img src={appimg} alt="abc" className='w-full h-full object-contain' /></div>
                            <div className="w-[104px] h-[38px]"><img src={gogimg} alt="bcd" className='w-full h-full object-contain' /></div>


                        </div>


                    </div>


                </div>







            </div>




        </div>



    </div>


    <p className="text-center text-[#ffff] font-poppins w-full [20px] pt-[40px] pb-[30px] text-[16px] bg-black"> © Copyright Rimel 2022. All right reserved</p>





      
    </>
  )
}

export default Footer
