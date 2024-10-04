import React from 'react'
import Profile_sidebar from './Profile_sidebar'
import Edit_profile from './Edit_profile'

const Profile_home = () => {
    return (
        <>

            <div className="w-full h-auto">
                <div className="max-w-[1200px] m-auto">

                    <div className="flex">

                        <div className="w-[20%]">
                            <Profile_sidebar />


                        </div>


                        <div className="w-[80%]">

                            <Edit_profile />

                        </div>

                        
                    </div>









                </div>
            </div>


        </>
    )
}

export default Profile_home
