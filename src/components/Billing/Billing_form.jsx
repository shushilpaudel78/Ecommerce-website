import React from 'react'

import B_form from './B_form'
import B_card from './B_card'

const Billing_form = () => {
    return (
        <>

            <div className="w-full h-auto my-[20px] px-[10px] sm:my-[0px]">

                <div className="max-w-[1200px] m-auto">


                    <div className="w-full h-auto flex flex-wrap ">


                        <div className="w-[50%] sm:w-full">

                            <B_form />
        
                        </div>


                        <div className="w-[50%] sm:w-full">

                            <B_card />

                        </div>




                    </div>





                </div>
            </div>



        </>
    )
}

export default Billing_form
