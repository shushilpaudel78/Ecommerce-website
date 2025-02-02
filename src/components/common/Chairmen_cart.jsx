import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Chairmen_cart = ({name, img, position}) => {

    return (

        <>
            <div className="w-full flex flex-col gap-3">

                <div className="w-full h-[391] my-[20px] p-[10px]">
                    <img src={img} alt="chairperson" className='w-full h-full  object-contain' />
                </div>

                <div className="px-[20px]  flex flex-col gap-[10px]">
                    <h1 className='font-poppins font-medium first-letter:uppercase text-[32px] leading-[30px]'>{name}</h1>
                    <p className='font-poppins  font-normal text-[16px]  leading-[30px]'>{position}</p>
                    <ul className='flex gap-[15px]'>
                        <li><Link to='/twitter'><FaTwitter className='text-[20px]' /></Link></li>
                        <li><Link to='/instagram'><FaInstagram className='text-[20px]' /></Link></li>
                        <li><Link to='/linkin'> <FaLinkedinIn className='text-[20px]' /> </Link></li>
                    </ul>

                </div>
            </div>

        </>

    )
}

export default Chairmen_cart
