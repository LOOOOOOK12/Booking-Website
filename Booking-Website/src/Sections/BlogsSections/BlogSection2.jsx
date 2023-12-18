import React from 'react'
import BlogsContainer from '../../Components/BlogsContainer';
import { BlogsSwiper } from '../../Constants/Blogs/BlogsSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

function BlogSection2() {
    return (
        <div className='flex items-center justify-center py-20 px-24'>
            <Swiper  
            modules={[FreeMode]}
            slidesPerView={3}
            freeMode ={{
                enabled: true,
                momentum: true
            }}
            loop
            className='h-full w-full'>
                {BlogsSwiper.map((blog,idx)=>(
                    <SwiperSlide key={idx}>
                        <BlogsContainer
                            image= {blog.image}
                            alt={blog.alt}
                            blogs={blog.blogs}
                        />
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}

export default BlogSection2