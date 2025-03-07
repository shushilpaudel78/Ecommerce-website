import React from 'react'
import girl from '/img/about/girls.png'

const About_hero = () => {
    return (
        <>

            <div className="w-full h-auto px-[10px] mt-[30px] mb-[100px] md:mt-[0px] md:mb-[0px]">
                <div className="max-w-[1200px] m-auto">

                    <p className=' text-[16px] my-[20px] text-left md:my-[0px]'> Home / About</p>
                    <div className="flex flex-wrap ">
                        <div className="w-[50%] h-auto md:w-full">
                            <div className="flex flex-col mt-20 sm:mt-4">
                                <h1 className='text-[40px] font-poppins  font-medium text-color'>Our Story</h1>
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


                        <div className="w-[50%] h-auto md:w-full">

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
