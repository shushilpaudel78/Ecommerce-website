import React from 'react'
import Profile_sidebar from './Profile_sidebar'
import Edit_profile from './Edit_profile'

const Profile_home = () => {
    return (
        <>

            <div className="w-full h-auto my-5 sm:my-0">
                <div className="max-w-[1200px] m-auto">

                    <div className="flex justify-between px-[10px] py-[20px] font-poppins text-[16px]">
                        <p>Home/Account</p>
                        <p>Welcome! Md Rimel</p>

                    </div>

                    <div className="flex px-[10px]">

                        <div className="w-[20%] md:w-[30%] sm:w-[40%]">
                            <Profile_sidebar />


                        </div>


                        <div className="w-[80%] md:w-[70%] sm:w-[60%]">

                            <Edit_profile />

                        </div>


                    </div>









                </div>
            </div>


        </>
    )
}

export default Profile_home
