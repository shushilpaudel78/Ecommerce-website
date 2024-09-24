import React from 'react'
import cha from '../assets/img/chair2.png'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const About_chairmen = () => {
    return (
        <>

            <div className="w-full h-auto my-[60px] px-10">
                <div className="max-w-[1200px] m-auto">

                    <div className="flex flex-wrap justify-start">

                        <div className="w-[33.33%] py-[5px] flex flex-col gap-3">


                            <div className="w-full h-[391] my-[20px] p-[10px]">
                                <img src={cha} alt="chairperson" className='w-full h-full  object-contain' />
                            </div>

                            <div className="px-[20px]  flex flex-col gap-[10px]">
                                <h1 className='font-poppins font-medium first-letter:uppercase text-[32px] leading-[30px]'>tom Cruise</h1>
                                <p className='font-poppins  font-normal text-[16px]  leading-[30px]'>Founder & Chairmen</p>
                                <ul className='flex gap-[15px]'>
                                    <li><Link to='/twitter'><FaTwitter className='text-[20px]' /></Link></li>
                                    <li><Link to='/instagram'><FaInstagram className='text-[20px]' /></Link></li>
                                    <li><Link to='/linkin'> <FaLinkedinIn className='text-[20px]' /> </Link></li>
                                </ul>


                            </div>



                        </div>


                        <div className="w-[33.33%] py-[5px] flex flex-col gap-3">


                            <div className="w-full h-[391] my-[20px] p-[10px]">
                                <img src={cha} alt="chairperson" className='w-full h-full  object-contain' />
                            </div>

                            <div className="px-[20px]  flex flex-col gap-[10px]">
                                <h1 className='font-poppins font-medium first-letter:uppercase text-[32px] leading-[30px]'>tom Cruise</h1>
                                <p className='font-poppins  font-normal text-[16px]  leading-[30px]'>Founder & Chairmen</p>
                                <ul className='flex gap-[15px]'>
                                    <li><Link to='/twitter'><FaTwitter className='text-[20px]' /></Link></li>
                                    <li><Link to='/instagram'><FaInstagram className='text-[20px]' /></Link></li>
                                    <li><Link to='/linkin'> <FaLinkedinIn className='text-[20px]' /> </Link></li>
                                </ul>


                            </div>



                        </div>

                        <div className="w-[33.33%] py-[5px] flex flex-col gap-3">


                            <div className="w-full h-[391] my-[20px] p-[10px]">
                                <img src={cha} alt="chairperson" className='w-full h-full  object-contain' />
                            </div>

                            <div className="px-[20px] flex flex-col gap-[10px]">
                                <h1 className='font-poppins font-medium first-letter:uppercase text-[32px] leading-[30px]'>tom Cruise</h1>
                                <p className='font-poppins  font-normal text-[16px]  leading-[30px]'>Founder & Chairmen</p>
                                <ul className='flex gap-[15px]'>
                                    <li><Link to='/twitter'><FaTwitter className='text-[20px]' /></Link></li>
                                    <li><Link to='/instagram'><FaInstagram className='text-[20px]' /></Link></li>
                                    <li><Link to='/linkin'> <FaLinkedinIn className='text-[20px]' /> </Link></li>
                                </ul>


                            </div>



                        </div>




                    </div>


                </div>

            </div>





        </>
    )
}

export default About_chairmen
