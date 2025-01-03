import React from 'react'
import Red_button from '../common/Red_button'

const Contact_form = () => {
    return (
        <>
            <div className="w-full h-auto shadow-sm px-5 py-7 sm:px-[10px] sm:py-1">
                <div className="flex flex-wrap font-poppins text-[16px] sm:gap-3 ">

                    <div className='w-1/3 px-[10px] sm:w-full sm:px-0'>
                        <input type="text" className='border-[2px] bg-[#F5F5F5] h-[50px] w-full rounded-sm px-5' placeholder='Your Name *' />
                    </div>

                    <div className=' w-1/3 px-[10px]  sm:w-full sm:px-0'>
                        <input type="text" className='border-[2px] bg-[#F5F5F5] h-[50px] w-full rounded-sm px-5' placeholder='Your Email *' />
                    </div>

                    <div className='w-1/3 px-[10px]  sm:w-full sm:px-0'>
                        <input type="text" className='border-[2px] bg-[#F5F5F5] h-[50px] w-full rounded-sm px-5' placeholder='Your Phone *' />
                    </div>

                    <div className="w-full my-3 px-[10px]  sm:px-0 ">

                        <textarea type="text" className='border-[2px] bg-[#F5F5F5] h-[207px] w-full rounded-sm px-5' placeholder='Your Message *' />


                    </div>



                </div>

                <div className="w-full px-3 flex justify-end py-2">
                    <Red_button name="Send Message" />

                </div>

                



            </div>


        </>
    )
}

export default Contact_form
