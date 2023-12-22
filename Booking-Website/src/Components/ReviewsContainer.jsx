import React from 'react'

function ReviewsContainer({spot, alt, comment, profilePic, customerName, role}){

    return (
        <div className='flex flex-col px-24 py-20'>
            <div className = 'w-2/4'>
                <h2 className='text-Rich-Black text-4xl font-semibold mb-4'>Travelers Reviews</h2>
                <hr className=' bg-Rich-Black h-0.5 w-3/5 '/>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <div className='comment-Text'>
                    <p className='text-2xl text-Grey mt-4 mr-16 font-light'>{comment}</p>
                    <div className='mt-12 flex items-center gap-8'>
                        <img src={profilePic} className='h-28 rounded-full'/>
                        <div className='profile-Info'>
                            <h4 className='text-3xl mb-5 font-semibold text-Rich-Black'>{customerName}</h4>
                            <p className='text-Grey'>{role}</p>
                        </div>
                    </div>
                </div>
                <img src={spot} alt={alt} className='h-96 rounded-md'/>
            </div>   
        </div>
    )
}

export default ReviewsContainer