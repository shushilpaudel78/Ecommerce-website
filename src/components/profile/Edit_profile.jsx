import React from 'react'
import Red_button from '../Button/Red_button'
import Ru_button from '../Button/Ru_button'

const Edit_profile = () => {
    return (
        <>
            <div className="w-full h-auto shadow-lg my-2 px-10 py-10 sm:py-0  sm:px-3">

                <h1 className='text-[#DB4444] text-[20px] font-normal font-poppins'>Edit Your Profile</h1>

                <div className="flex flex-wrap font-poppins text-[16px] font-normal">

                    <div className="flex w-[50%] flex-col my-6 pr-5 md:w-full sm:my-1">
                        <p>Firstname</p>
                        <input type="text" className='bg-[#F5F5F5] h-[50px] px-[10px] sm:pr-0' placeholder='Shushil' />
                    </div>

                    <div className="flex w-[50%] flex-col my-6 pr-5 md:w-full  sm:my-1">
                        <p>Lastname</p>
                        <input type="text" className='bg-[#F5F5F5] h-[50px] px-[10px] sm:pr-0' placeholder='Paudel' />
                    </div>

                    <div className="flex w-[50%] flex-col my-6 pr-5 md:w-full sm:my-1">
                        <p>Email</p>
                        <input type="text" className='bg-[#F5F5F5] h-[50px] px-[10px] sm:pr-0 ' placeholder='sp@gmail.com' />
                    </div>

                    <div className="flex w-[50%]  flex-col my-6 pr-5 md:w-full sm:my-1">
                        <p>Address</p>
                        <input type="text"  className='bg-[#F5F5F5] h-[50px] px-[10px] sm:pr-0' placeholder='Chitwan'/>
                    </div>


                    <div className="flex w-full  flex-col my-6 gap-1 pr-5 sm:pr-0 sm:my-1">

                        <h1 className='w-full'>Password Change</h1>
                        <input type="text" placeholder='Current Password' className='bg-[#F5F5F5] h-[50px] px-[10px]' />
                        <input type="text"  placeholder='New Password' className='bg-[#F5F5F5] h-[50px] px-[10px]' />
                        <input type="text"placeholder='Confirm Password' className='bg-[#F5F5F5] h-[50px] px-[10px]' />


                    </div>


                    <div className="flex gap-3 flex-end  flex-wrap">
                        <Ru_button name="Cancel" />
                        <Red_button name="Save Change" />


                    </div>







                </div>




            </div>

        </>
    )
}

export default Edit_profile
