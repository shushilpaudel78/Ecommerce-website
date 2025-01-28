import React from 'react'
const Contact_info = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-8 py-6 shadow-sm sm:py-0 sm:px-[10px]">

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4 my-2 sm:mt-0">
                        <div className=" w-[30px] h-[30px]">
                            <img src='/img/contact/call.png' alt="image" className='w-full h-full object-contain' />
                        </div>

                        <p className='text-colorBorder text-[16px] font-grotesque font-bold uppercase '>call to us</p>
                    </div>

                    <div className="flex flex-col ">
                        <p className='text-[14px] text-textBlue font-sans font-normal'>We are available 24/7, 7 days a week.</p>
                        <p className='text-[14px] text-textBlue font-sans font-normal'>Phone: +8801611112222</p>

                    </div>

                </div>




                <div className='flex flex-col gap-2'>
                    <div className="flex items-center gap-3 my-2">
                        <div className=" w-[30px] h-[30px]">
                            <img src='/img/contact/msg.png' alt="image" className='w-full h-full object-contain' />
                        </div>

                        <p className='text-colorBorder text-[16px] font-grotesque font-bold uppercase'>Write To US</p>
                    </div>

                    <div className="flex flex-col text-[14px] text-textBlue font-sans font-normal sm:my-2">
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact_info
