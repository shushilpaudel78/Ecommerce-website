import React from 'react'
import simage from '/img/Addtocart/Monitor-Cart-Small.png'
import Ru_button from '../Button/Ru_button'
import Red_button from '../Button/Red_button'
import Addtotal from './Addtotal'

const Addtable = () => {
    return (
        <>
            <div className="w-full  h-auto px-[5px] py-[20px]">

                <div className="max-w-[1200px] m-auto">

                    <h1 className='font-poppins text-[16px] font-normal'>Home / Cart</h1>


                    <table className='w-full  my-[20px]'>

                        <tr className='font-poppins text-[16px] font-normal shadow  text-left'>
                            <th className='py-[20px]  px-[20px]'>Product</th>
                            <th className='py-{20px]'>Price</th>
                            <th className='py-[20px]'>Quantity</th>
                            <th className='py-[20px] text-right px-[20px]'>Subtotal</th>
                        </tr>

                        <tr className='font-poppins text-[16px] font-normal shadow-sm text-left'>
                            <td className='py-[20px] px-[20px]'>
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className="w-[54px] h-[54px]"><img src={simage} alt="" className='w-full h-full object-contain' /></div>
                                    <p>LCD Monitor</p>

                                </div>
                            </td>
                            <td className='py-[20px]'>$ 850</td>

                            <td className='py-[20px]'><input type="text" placeholder='01' className=' text-center px-[10px] border-[3px] w-16 h-10 text-[16px] font-poppins' /></td>
                            <td className='py-[20px] text-right px-[20px]'>$ 650</td>

                        </tr>



                        <tr className='font-poppins text-[16px] font-normal shadow-sm text-start'>
                            <td className='py-[20px] px-[20px]'>
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className="w-[54px] h-[54px]"><img src={simage} alt="" className='w-full h-full object-contain' /></div>
                                    <p>LCD Monitor</p>

                                </div>
                            </td>
                            <td className='py-[20px]'>$ 850</td>

                            <td className='py-[20px]'><input type="text" placeholder='01' className=' text-center px-[10px] border-[3px] w-16 h-10 text-[16px] font-poppins' /></td>
                            <td className='py-[20px] text-right px-[20px]'>$ 650</td>

                        </tr>


                    </table>


                    <div className="flex justify-between my-[30px]">

                        <Ru_button name="Return to shop" />
                        <Ru_button name='Update cart' />


                    </div>

                    <div className="flex justify-between my-[30px] flex-wrap ">

                        <div className="w-[50%] md:w-full ">
                            <div className="flex gap-20 flex-wrap md:gap-3">

                                <input type="text" className='border-[3px] font-poppins text-[16px] px-[10px]' placeholder='Coupan Code' />
                                <Red_button name="Apply Coupan" />

                            </div>


                        </div>

                        <div className="w-[50%] md:w-full md:my-7">



                            <Addtotal />



                        </div>


                    </div>






                </div>
            </div>


        </>
    )
}

export default Addtable
