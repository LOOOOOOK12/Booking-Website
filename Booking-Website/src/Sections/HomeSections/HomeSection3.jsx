import React from 'react'
import HomeSection3Styles from '../../Styles/SectionsStyles/HomeSectionsStyles/HomeSection3Styles'
import ReviewsContainer from '../../Components/ReviewsContainer'
import { Reviews } from '../../Constants/Reviews/Review'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

function HomeSection3() {
    return (
        <HomeSection3Styles>
            <Swiper 
            modules={[Autoplay]}
            autoplay = {{
            disableOnInteraction:false,
            delay: 5000
            }}
            loop
            id='Section3-Container'>

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
        </HomeSection3Styles>
    )
}

export default HomeSection3