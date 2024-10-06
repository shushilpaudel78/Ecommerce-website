import React from 'react'
import View_cart from '../Cart/product _cart/View_cart';
import Red_button from '../Button/Red_button';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';






const Product_viewproduct = () => {





    return (
        <>

            <div className="w-full h-auto my-[20px] py-[20px] sm:my-[0px]" >
                <div className="max-w-[1200px] m-auto">

                    <div className="flex flex-wrap mx-[10px]">


                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={1}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            
                            <SwiperSlide><View_cart /></SwiperSlide>

                        </Swiper>






                    </div>










                    <div className="w-full flex justify-center my-10 sm:my-2">

                        <Red_button name="View All the product" />

                    </div>





                </div>


            </div>


        </>
    )
}

export default Product_viewproduct
