import React from 'react'
import Contact_form from './contact_form'
import Contact_info from './Contact_info'

const Contact_index = () => {
    return (
        <>
            <div className="w-full h-auto my-6 py-2 sm:my-0 sm:py-0">
                <div className="max-w-[1200px] m-auto">

                    <div className="flex flex-wrap">

                        <div className="w-[30%] px-4 md:w-full ">
                            <Contact_info />
                        </div>

                        <div className="w-[70%] px-4 md:w-full">
                            <Contact_form  />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Contact_index
