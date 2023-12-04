import React from 'react'

function ReviewsContainer({spot, alt, comment, profilePic, customerName, role, style}){

    const StyledReview = style;

    return (
        <StyledReview>
            <div className='comment-Container'>
                <div className = 'Title'>
                    <h2>Travelers Reviews</h2>
                    <hr />
                </div>
                <div className='comment-Text'>
                    <p className='comment'>{comment}</p>
                    <div className='profile'>
                        <img src={profilePic} className='profile-Pic'/>
                        <div className='profile-Info'>
                            <h4>{customerName}</h4>
                            <p>{role}</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={spot} alt={alt} className='spot'/>
        </StyledReview>
    )
}

export default ReviewsContainer