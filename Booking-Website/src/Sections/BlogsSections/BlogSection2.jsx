import React from 'react'
import BlogsContainer from '../../Components/BlogsContainer';
import { BlogsSwiper } from '../../Constants/Blogs/BlogsSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

function BlogSection2() {
    return (
        <div className='flex items-center justify-center py-20 px-16'>
            <Swiper  
            modules={[FreeMode]}
            slidesPerView={3}
            freeMode ={{
                enabled: true,
                momentum: true
            }}
            breakpoints={{
                    425: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2, 
                    },
                    768: {
                        slidesPerView: 3, 
                    },
                }}
            loop
            className='h-full w-full flex justify-center items-center'
            >
                {BlogsSwiper.map((blog,idx)=>(
                    <SwiperSlide key={idx}>
                            <div className='mr-8'>
                                <BlogsContainer
                                    image= {blog.image}
                                    alt={blog.alt}
                                    header={blog.header}
                                    blogs={blog.blogs}
                                />
                            </div>    
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}

export default BlogSection2