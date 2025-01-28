import React from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'
import CountNumber from '../common/CountNumber'

const Counter = () => {
    const [trigger, setTrigger] = useState(false)


    return (
        <>
            <div className="w-full py-8 bg-textBlue">
                <div className="max-w-[1200px] m-auto">
                    <ScrollTrigger onEnter={() => setTrigger(true)} onExit={() => setTrigger(false)} >
                        {trigger &&

                            <div className="w-full flex">

                                <div className="w-1/4">
                                    <CountNumber number='100' symbol="%" />
                                </div>

                                <div className="w-1/4">
                                    <CountNumber number='5000' symbol="" />
                                </div>

                                <div className="w-1/4">
                                    <CountNumber number='2000' symbol="%" />
                                </div>
                                <div className="w-1/4">
                                    <CountNumber number='10000' symbol="%" />
                                </div>
                            </div>
                        }
                    </ScrollTrigger>



                </div>
            </div>

        </>
    )
}

export default Counter
