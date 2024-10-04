import React from 'react'
import computer from '/img/product/computer.png'

const Billing_form = () => {
    return (
        <>

            <div className="w-full h-auto my-[20px]">

                <div className="max-w-[1200px] m-auto">


                    <div className="w-full h-auto flex">


                        <div className="w-[50%]">
                            <div className="flex flex-col w-full h-full gap-4">
                                <h1>First Name *</h1>
                                <input type="text" className='border-[2px]' />

                                <h1>Company Name *</h1>
                                <input type="text" className='border-[2px]' />

                                <h1>Street Address *</h1>
                                <input type="text" className='border-[2px]' />

                                <h1>Appartmeent Floor (optional )</h1>
                                <input type="text" className='border-[2px]' />


                                <h1>Town City *</h1>
                                <input type="text" className='border-[2px]' />


                                <h1>Phone Number *</h1>
                                <input type="text" className='border-[2px]' />


                                <h1>Email Address *</h1>
                                <input type="text" className='border-[2px]' />


                            </div>


                        </div>


                        <div className="w-[50%]">

                            <div className="p-[53px]">



                                <div className="flex w-full h-auto justify-between">
                                    <div className="flex gap-4">

                                        <div className="w-[54px]  h-[54px]">
                                            <img src={computer} alt="computer" className='w-full h-full object-contain' />
                                        </div>
                                        <p>LCD Monitor</p>

                                    </div>

                                    <p>$650</p>


                                </div>




                                <div className="flex w-full h-auto justify-between">
                                    <div className="flex gap-4">

                                        <div className="w-[54px]  h-[54px]">
                                            <img src={computer} alt="computer" className='w-full h-full object-contain' />
                                        </div>
                                        <p>LCD Monitor</p>

                                    </div>

                                    <p>$650</p>


                                </div>

                            </div>







                        </div>




                    </div>



                    

                </div>
            </div>



        </>
    )
}

export default Billing_form
