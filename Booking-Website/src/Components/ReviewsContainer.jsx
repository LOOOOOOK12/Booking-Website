import React from 'react'

function ReviewsContainer({spot, alt, comment, profilePic, customerName, role}){

    return (
        <div className='flex flex-col px-16 py-20 gap-6'>
            <div className = 'md:w-2/4'>
                <h2 className='text-Rich-Black text-5xl font-semibold mb-4'>Travelers Reviews</h2>
                <hr className=' bg-Rich-Black h-0.5 w-3/4 '/>
            </div>
            <div className='flex flex-col gap-16 md:flex md:flex-row md:items-center md:justify-center md:gap-12'>
                <div className='flex flex-col w-3/4'>
                    <p className='text-2xl text-Grey font-light'>{comment}</p>
                    <div className='mt-12 flex items-center gap-8'>
                        <img src={profilePic} className='h-20 rounded-full'/>
                        <div className='profile-Info'>
                            <h4 className='text-3xl mb-5 font-semibold text-Rich-Black'>{customerName}</h4>
                            <p className='text-Grey'>{role}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <img src={spot} alt={alt} className='h-full w-full rounded-md'/>
                </div>
            </div>   
        </div>
    )
}

export default ReviewsContainer