import React from 'react'
import girl from '../assets/img/girls.png'

const About_hero = () => {
    return (
        <>

            <div className="w-full h-auto px-[5px] mt-[30px] mb-[100px]">

                <div className="max-w-[1200px] m-auto">

                    <p className='font-poppins text-[14px] my-[30px] text-left'> Home / About</p>


                    <div className="flex flex-wrap">

                        <div className="w-[50%] h-auto">
                            <div className="flex flex-col mt-20">
                                <h1 className='font-poppins text-[40px]  font-medium'>Our Story</h1>
                                <p className='font-poppins text-[16px leading-[30px] my-[20px] p-[5px]'>Launced in 2015, Exclusive is South Asia’s premier online
                                    shopping makterplace with an active presense in Bangladesh.
                                    Supported by wide range of tailored marketing, data and
                                    solutions, Exclusive has 10,500 sallers and 300 brands and serves
                                    3 millioons customers across the region. </p>

                                <p className='font-poppins text-[16px]  my-[20px]  p-[5px]'>Exclusive has more than 1 Million products to offer,
                                    growing at a very fast. Exclusive offers a diverse
                                    assotment in categories ranging  from consumer.</p>

                            </div>


                        </div>


                        <div className="w-[50%] h-auto">

                            <div className="h-full w-full">
                                <img src={girl} alt="girl photo"  className=' h-full  w-full object-cover'/>

                            </div>
                        </div>


                    </div>


                </div>



            </div>

        </>
    )
}

export default About_hero
