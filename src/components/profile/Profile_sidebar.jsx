import React from 'react'
import { Link } from 'react-router-dom'

const Profile_sidebar = () => {
    return (
        <>
            <div className="flex flex-col font-poppins text-[16px] font-normal">

                <p>Manage My Account</p>


                <ul>
                    <li><Link>My Profile</Link></li>
                    <li><Link>Address Book</Link></li>
                    <li><Link>My Payment Options</Link></li>
                    <li><Link></Link></li>




                </ul>

                <p>My Orders</p>


                <ul>
                    <li><Link>My Return</Link></li>
                    <li><Link>My Concelation</Link></li>


                </ul>



                <p>My WishList</p>

            </div>



        </>
    )
}

export default Profile_sidebar
