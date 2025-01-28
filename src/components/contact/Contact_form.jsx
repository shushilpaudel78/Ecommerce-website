import React from 'react'
import Red_button from '../common/Red_button'

const Contact_form = () => {
    return (
        <>
            <form action="w-full">
                <div className="w-full h-auto shadow-sm px-5 py-7 sm:px-[10px] sm:py-1">
                    <div className="flex flex-wrap font-poppins text-[16px] sm:gap-3 ">


                        <div className='w-1/3 px-[10px] sm:w-full sm:px-0'>
                            <div className="h-[50px] w-full bg-secondaryWhite border px-4">
                                <input type="text" name='username' className='border-[2px] bg-secondaryWhite outline-none border-none  w-full h-full font-sans font-normal text-textBlue  text-[14px] ' placeholder='Your Name *' />
                            </div>
                        </div>

                        <div className=' w-1/3 px-[10px]  sm:w-full sm:px-0 '>
                            <div className="h-[50px] w-full bg-secondaryWhite border px-4">
                                <input type="email" name='email' className='border-[2px] bg-secondaryWhite outline-none border-none  w-full h-full font-sans font-normal text-textBlue  text-[14px] ' placeholder='Your Email *' />
                            </div>
                        </div>

                        <div className='w-1/3 px-[10px]  sm:w-full sm:px-0'>
                            <div className="h-[50px] w-full bg-secondaryWhite border px-4">
                                <input type="text" name='contact' className='border-[2px] bg-secondaryWhite outline-none border-none  w-full h-full font-sans font-normal text-textBlue  text-[14px] ' placeholder='Your Phone *' />
                            </div>
                        </div>

                        <div className='w-full px-[10px]  sm:w-full sm:px-0 my-4'>
                            <div className="h-[207px] w-full bg-secondaryWhite border px-4">
                                <textarea type="text" name='message'  className='border-[2px] bg-secondaryWhite outline-none border-none  w-full h-full font-sans font-normal text-textBlue  text-[14px] ' placeholder='Your Phone *' > </textarea>
                            </div>
                        </div>

                        <div className="px-[10px] my-4 ">
                            <button  className='font-sans font-normal text-colorBorder text-[16px]  border px-3 py-1 bg-textBlue/5'>Submit</button>

                        </div>







                    </div>

                    <div className="w-full px-3 flex justify-end py-2">
                        <Red_button name="Send Message" />

                    </div>





                </div>
            </form>

        </>
    )
}

export default Contact_form
