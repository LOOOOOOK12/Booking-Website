import React from 'react'
import ReviewsContainer from '../../Components/ReviewsContainer'
import { Reviews } from '../../Constants/Reviews/Review'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

function HomeSection3() {
    return (
        <div className='flex items-center justify-center'>
            <Swiper 
            modules={[Autoplay]}
            autoplay = {{
            disableOnInteraction:false,
            delay: 5000
            }}
            loop
            className='h-full w-full'>

            {Reviews.map((comments, idx)=>(
                    <SwiperSlide key={idx}>
                        <ReviewsContainer
                            comment={comments.comment}
                            profilePic={comments.profilePic}
                            customerName={comments.customerName}
                            role={comments.role}
                            spot={comments.spot}
                            alt={comments.alt}
                            style={comments.style}
                        />  
                    </SwiperSlide>     
                ))}
            </Swiper>
        </div>
    )
}

export default HomeSection3