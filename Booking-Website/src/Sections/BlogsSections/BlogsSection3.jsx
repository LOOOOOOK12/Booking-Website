import React from 'react'
import BlogsContainer2 from '../../Components/BlogsContainer2';
import { BlogsCollections } from '../../Constants/Blogs/BlogsCollection';
import BlogPic1 from '../../assets/Wide/Shinto.jpg'

function BlogsSection3() {
    return (
        <div className='flex py-20 px-24'>
            <div className='flex flex-col w-2/3'>
                <img src={BlogPic1} alt="" className='h-[30rem] w-[35rem] rounded-md'/>
                <h1 className='mb-4 mt-4 text-5xl font-semibold text-Rich-Black' >Lorem Ipsum</h1>
                <hr className='mb-4 w-3/5 h-0.5 bg-Rich-Black ' />
                <p className='text-Grey text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Deleniti non quibusdam ipsam,
                </p>
            </div>
            <div className='flex flex-col items-center justify-center w-[30rem] h-full'>
                {BlogsCollections.map((blog)=>(   
                    <BlogsContainer2
                        image= {blog.image}
                        alt={blog.alt}
                        header={blog.header}
                        blogs={blog.blogs}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogsSection3