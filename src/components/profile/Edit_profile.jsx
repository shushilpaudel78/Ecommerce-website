import React from 'react'

const Edit_profile = () => {
    return (
        <>
            <div className="w-full h-auto">

                <h1 className='text-[#DB4444] text-[20px] font-normal font-poppins'>Edit Your Profile</h1>

                <div className="flex flex-wrap font-poppins text-[16px] font-normal">

                    <div className="flex w-[50%] flex-col my-6">
                        <p>Firstname</p>
                        <input type="text" className='bg-[#F5F5F5]' />
                    </div>

                    <div className="flex w-[50%] flex-col my-6">
                        <p>Lastname</p>
                        <input type="text" className='bg-[#F5F5F5]' />
                    </div>

                    <div className="flex w-[50%] flex-col my-6">
                        <p>Email</p>
                        <input type="text" className='bg-[#F5F5F5]' />
                    </div>

                    <div className="flex w-[50%]  flex-col my-6">
                        <p>Address</p>
                        <input type="text"  className='bg-[#F5F5F5]'/>
                    </div>


                    <div className="flex w-full  flex-col my-6 gap-4">

                        <h1 className='w-full'>Password Change</h1>
                        <input type="text" className='bg-[#F5F5F5]' />
                        <input type="text" className='bg-[#F5F5F5]' />
                        <input type="text" className='bg-[#F5F5F5]' />


                    </div>




                </div>




            </div>

        </>
    )
}

export default Edit_profile
