import React from 'react'
import Ru_button from '../common/Ru_button'
import Red_button from '../common/Red_button'
import Addtotal from '../common/Addtotal'
import { useState, useEffect } from 'react'
import { data } from '../constants/CartData'

const Addtable = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      // Get the cart data from localStorage
      const storedCart = localStorage.getItem('cartData');
      
      // If there is data, parse it and set it in the state
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }, [])

    const  [fvalue, setfvalue] = useState('')

    const invalue = (event) => {
        setfvalue(event.target.value);

    }


      


    return (

        <>
            <div className="w-full  h-auto px-[10px] py-[20px]">

                <div className="max-w-[1200px] m-auto">

                    <h1 className='font-poppins text-[16px] font-normal'>Home / Cart</h1>


                    <table className='w-full  my-[20px] sm:my-0'>

                        <tr className='font-poppins text-[16px] font-normal shadow  text-left'>
                            <th className='py-[20px]  pl-[10px]'>Product</th>
                            <th className='py-{20px] px-[5px]'>Price</th>
                            <th className='py-[20px]'>Quantity</th>
                            <th className='py-[20px] text-right px-[20px]'>Subtotal</th>
                        </tr>

                        {data?.map((product) => (


                            <tr className='font-poppins text-[16px] font-normal shadow-sm text-left'>
                                <td className='py-[20px] px-[20px]'>
                                    <div className="flex items-center flex-wrap gap-2">
                                        <div className="w-[54px] h-[54px]"><img src={product.img} alt="" className='w-full h-full object-contain' /></div>
                                        <p>{product.name}</p>

                                    </div>
                                </td>
                                <td className='py-[20px]'>{product.price}</td>

                                <td className='py-[20px]'><input type="text" onChange={invalue} value={fvalue} placeholder='01' className=' text-center px-[10px] border-[3px] w-16 h-10 text-[16px] font-poppins' /></td>
                                <td className='py-[20px] text-right px-[20px]'>{product.price*fvalue}</td>

                            </tr>

                        ))}




                    </table>


                    <div className="flex justify-between my-[30px] ">

                        <Ru_button name="Return to shop" />
                        <Ru_button name='Update cart' />


                    </div>

                    <div className="flex justify-between my-[30px] flex-wrap ">

                        <div className="w-[50%] md:w-full ">
                            <div className="flex gap-20 flex-wrap md:gap-3">

                                <input type="text" className='border-[3px] font-poppins text-[16px] px-[10px] sm:h-[50px]' placeholder='Coupan Code' />
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
