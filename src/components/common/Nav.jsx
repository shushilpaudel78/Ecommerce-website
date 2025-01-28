import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLocation } from "react-router-dom";



const Nav = () => {
    const location = useLocation();
    const { pathname } = location;

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [btnstyle, setBstyle] = useState('hidden');
    const toggleBtn = () => {
        setBstyle(btnstyle === 'hidden' ? 'block' : 'hidden');

    }

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve cart data from localStorage
        const storedCart = localStorage.getItem('cartData');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    return (
        <>

            <div className={`w-full h-full py-[20px] px-[10px] sm:py-5  z-10 sticky top-0 ${isScrolled ? 'bg-primaryBlue' : 'transparent'}`}>
                <div className=" max-w-[1200px] m-auto">

                    <div className="w-full h-auto flex justify-between items-center ">
                        <div className="w-[80px] h-[80px]" style={{
                            clipPath: 'circle(50% at 50% 50%)'

                        }}>
                            <img src="img/logo.png" alt="logo" className='w-full  h-full object-contain' />
                        </div>
                        <ul className={`flex gap-[30px] font-poppins  ${isScrolled ? 'text-secondaryWhite' : 'text-textBlue'} text-[16px] font-normal md:${btnstyle}`}>
                            <li className='flex items-center gap-1'>
                                {pathname == "/" && (
                                    <FaArrowRightLong className="text-[12px] md:hidden" />
                                )}
                                <Link to='/' className=''>Home</Link>
                            </li>
                            <li className='flex items-center gap-1'>
                                {pathname == "/contact" && (
                                    <FaArrowRightLong className="text-[12px] md:hidden" />
                                )}<Link to='/contact' className=''>Contact</Link>
                            </li>

                            <li className='flex items-center gap-1'>
                                {pathname == "/about" && (
                                    <FaArrowRightLong className="text-[12px] md:hidden" />
                                )}<Link to='/about' className=''>About</Link>
                            </li>
                            <li className='flex items-center gap-1'>
                                {pathname == "/signup" && (
                                    <FaArrowRightLong className="text-[12px] md:hidden" />
                                )}
                                <Link to='/signup' className=''>Sign Up</Link></li>

                        </ul>


                        <div className="flex md:justify-end">

                            <div className="w-[270px] h-[50px] border border-colorBorder lg:hidden flex  items-center px-4 bg-lightBlue">
                                <input type="text" placeholder='What are you looking for ? ' className='w-full bg-lightBlue h-full border-none outline-none font-poppins text-[14px] rounded-[2px]' />
                                <FaSearch className='text-[20px] text-textBlue' />

                            </div>

                            <ul className='flex text-[25px] gap-4 mx-4 py-3 px-2' id='myNav'>
                                <li ><Link to='/favorite' className='active:text-red-400'>  <CiHeart className={`${isScrolled ? 'text-secondaryWhite' : 'text-textBlue'}`} /></Link></li>
                                <li className='relative'>
                                    <p id='cartCount' className='bg-red-600 rounded-[100px] text-[10px]  bg-red-500 text-white font-poppins font-extralight  text-center p-[4px] absolute top-[-12px] right-[-12px]'>{cartItems.length}</p>
                                    <Link to='/addcart' className=''>
                                        <IoCartOutline className={`${isScrolled ? 'text-secondaryWhite' : 'text-textBlue'}`} /></Link>
                                </li>

                                <li ><Link to='/profile' className=' active:text-red-400 text-textBlue'><FaRegUser className={`text-[20px] ${isScrolled ? 'text-secondaryWhite' : 'text-textBlue'}`} /></Link></li>
                            </ul>

                            <div>
                                <button onClick={toggleBtn} > <IoReorderThreeOutline className='text-[30px] m-[7px] hidden md:block' /> </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Nav;
