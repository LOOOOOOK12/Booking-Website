import React from 'react'
import BlogsContainer2 from '../../Components/BlogsContainer2';
import { BlogsSwiper } from '../../Constants/Blogs/BlogsSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogPic1 from '../../assets/Wide/Shinto.jpg'

function BlogsSection3() {
    return (
        <div className='flex py-20 px-24'>
            <div className='flex flex-col'>
                <img src={BlogPic1} alt="" className='h-[30rem] w-[35rem]'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Deleniti non quibusdam ipsam,
                </p>
            </div>
            <div className='flex items-center w-[30rem] h-full'>
                <Swiper  
                slidesPerView={2}
                loop  
                className='h-full w-full'>
                    {BlogsSwiper.map((blog,idx)=>(
                        <SwiperSlide key={idx}>
                            <BlogsContainer2
                                image= {blog.image}
                                alt={blog.alt}
                                blogs={blog.blogs}
                            />
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </div>
    )
}

export default BlogsSection3