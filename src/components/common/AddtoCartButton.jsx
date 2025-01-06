import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";

const AddtoCartButton = ({ name }) => {
    return (
        <>
            <button className='w-full py-[10px] text-white rounded-lg bg-primaryBlue font-poppins  font-normal text-[16px] flex justify-center gap-2 items-center'>
                {name}
                <RiShoppingCart2Line />
            </button>


        </>
    )
}

export default AddtoCartButton
