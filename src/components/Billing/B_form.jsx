import React from 'react'

const B_form = () => {
    return (
        <>
            <div className='w-full h-auto  pb-6'>
                <h1 className='text-poppins text-[32px] font-medium my-5'>Billing Details</h1>
                <div className="flex flex-col w-full h-full gap-4 text-[16px] font-normal font-poppins text-[#8b8989] pr-10 leading-[30px] sm:px-[10px]">
                    <div>
                        <h1>First Name *</h1>
                        <input type="text" className='border-[2px] h-[50px] bg-[#F5F5F5] w-[80%] sm:w-full' />
                    </div>

                    <div>
                        <h1>Company Name *</h1>
                        <input type="text" className='border-[2px] h-[50px] bg-[#F5F5F5] w-[80%] sm:w-full' />

                    </div>

                    <div>
                        <h1>Street Address *</h1>
                        <input type="text" className='border-[2px] h-[50px] bg-[#F5F5F5] w-[80%] sm:w-full' />

                    </div>


                    <div>
                        <h1>Appartmeent Floor (optional )</h1>
                        <input type="text" className='border-[2px] h-[50px] bg-[#F5F5F5] w-[80%] sm:w-full' />

                    </div>


                    <div>
                        <h1>Town City *</h1>
                        <input type="text" className='border-[2px] h-[50px] bg-[#F5F5F5] w-[80%] sm:w-full' />


                    </div>


                    <div>
                        <h1>Phone Number *</h1>
                        <input type="text" className='border-[2px] h-[50px] bg-[#F5F5F5] w-[80%] sm:w-full' />
                    </div>


                    <div>
                        <h1>Email Address *</h1>
                        <input type="text" className='border-[2px] h-[50px] bg-[#F5F5F5] w-[80%] sm:w-full' />

                    </div>


                </div>

            </div>


        </>
    )
}

export default B_form
