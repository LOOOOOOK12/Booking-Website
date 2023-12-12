import React from 'react'
import BlogsContainer from '../../Components/BlogsContainer';
import { BlogsSwiper } from '../../Constants/Blogs/BlogsSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function BlogSection2() {
    return (
        <div className='flex items-center justify-center py-20 px-24'>
            <Swiper  
            slidesPerView={3}
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