import React from 'react'
import { BsSendArrowDown } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>

    <div className="w-full h-full py-[20px]">
        <div className="max-w-[1200px] m-auto">

            <div className="flex w-full h-auto justify-start flex-wrap">

                <div className="w-[20%]">
                    <h1 className='font-poopins text'>Exclusive</h1>
                    <h3>Subscribe</h3>
                    <p>Get 10% off your first order</p>
                    <div className="relative w-[123px] h-[24px] border-[2px]">
                        <input type="text" />
                        <BsSendArrowDown />

                    </div>

                    
                </div>


                <div className="w-[20%]">
                    <h1>Support</h1>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>


                <div className="w-[20%]">
                    <h1>Account</h1>

                    <ul>
                        <li><Link element ='' path=''>My Account</Link></li>
                        <li><Link element ='' path=''>Login / Register</Link></li>
                        <li><Link element ='' path=''>Cart</Link></li>
                        <li><Link element ='' path=''>Wishlist</Link></li>
                        <li><Link element ='' path=''>Shop</Link></li>
                        

                    </ul>

                </div>

                <div className="w-[20%]">
                    <h1>Quick  link</h1>

                    
                    <ul>
                        <li><Link element ='' path=''>Privacy Policy</Link></li>
                        <li><Link element ='' path=''>Term of use</Link></li>
                        <li><Link element ='' path=''>FAQ</Link></li>
                        <li><Link element ='' path=''>Contact</Link></li>
                        

                    </ul>
                </div>


                <div className="w-[20%]">
                    <h1>Download App</h1>
                </div>




            </div>


        </div>



    </div>




      
    </>
  )
}

export default Footer
