import React from 'react'
import msg from '/img/contact/msg.png'
import call from '/img/contact/call.png'


const Contact_info = () => {
    return (
        <>

            <div className="w-full h-auto font-poppins  text-[16px] font-normal px-7 py-6 shadow-sm">

                <div className="flex items-center gap-4 my-5">

                    <div className=" w-[40px] h-[40px]">
                        <img src={call} alt="image" className='w-full h-full object-contain' />

                    </div>

                    <p className='font-semibold'>call to us</p>


                </div>


                <div className="flex flex-col gap-4 text-[14px]">
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>

                </div>




                <hr  className='w-2px my-5 px-4'/>

                <div className="flex items-center gap-3 my-5">

                    <div className=" w-[40px] h-[40px]">
                        <img src={msg} alt="image" className='w-full h-full object-contain' />

                    </div>

                    <p className='font-semibold'>Write To US</p>


                </div>



                <div className="flex flex-col text-[14px]  gap-4">
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>

                </div>




            </div>



        </>
    )
}

export default Contact_info
