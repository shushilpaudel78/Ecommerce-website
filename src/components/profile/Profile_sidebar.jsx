import React from 'react'
import { Link } from 'react-router-dom'

const Profile_sidebar = () => {
    return (
        <>
            <div className="flex flex-col font-poppins text-[16px] font-normal gap-4 my-4">
                <p className='font-poppins font-semibold '>Manage My Account</p>
                <ul className='px-6 text-[#777272] sm:px-0'>
                    <li><Link>My Profile</Link></li>
                    <li><Link>Address Book</Link></li>
                    <li><Link>My Payment Options</Link></li>
                    <li><Link></Link></li>
                </ul>

                <p className='font-poppins font-semibold '>My Orders</p>


                <ul className='px-6 text-[#777272] sm:px-0'>
                    <li><Link>My Return</Link></li>
                    <li><Link>My Concelation</Link></li>
                </ul>
                <p className='font-poppins font-semibold '>My WishList</p>
            </div>
        </>
    )
}

export default Profile_sidebar
