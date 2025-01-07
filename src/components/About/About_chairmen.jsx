import React from 'react'
import Chairmen_cart from '../common/Chairmen_cart'
import { data } from '../constants/ChairPersonData'


const About_chairmen = () => {
    return (
        <>
            <div className="w-full h-auto my-[60px] px-10 sm:my-0">
                <div className="max-w-[1200px] m-auto">

                    <div className="flex flex-wrap justify-start">
                        {data?.map((person) => (

                            <div className="w-[33.33%] py-[5px]  md:w-[50%] sm:w-[100%]">
                                <Chairmen_cart name={person.name}  img={person.img}  position={person.position}/>
                            </div>
                        ))}


                    </div>
                </div>

            </div>


        </>
    )
}

export default About_chairmen
