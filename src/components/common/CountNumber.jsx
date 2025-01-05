import React from 'react'
import CountUp from 'react-countup'

const CountNumber = ({ number, symbol }) => {
    return (
        <>
            <div className="flex">
                <div className='flex flex-col' >
                    <div className="flex">
                        <CountUp start={0} end={number} className="font-grotesque font-bold text-[40px] text-secondaryWhite "></CountUp>
                        <p className="font-grotesque font-bold text-[40px] text-secondaryWhite">{symbol}</p>

                    </div>
                    <p className='font-sans font-normal text-[20px] text-secondaryWhite'>Total Customer</p>

                </div>

            </div>





        </>
    )
}

export default CountNumber
