import React from 'react'

function HotelsContainer({image, alt, hotelName, cost, wifi, service, bed, person, style}){

    const StyledHotel = style;

    return (
        <StyledHotel>           
            <img src={image} alt={alt} />
            <div className='HotelName'>
                <h3>{hotelName}</h3>
                <hr />
            </div>
            <div className='Text-Hotels'>
                <p>{cost}</p>
                <p>{wifi}</p>
                <p>{service}</p>
                <p>{bed}</p>
                <p>{person}</p>
                <button className='Check-Button'>Check</button>
            </div>
        </StyledHotel>
    )
}

export default HotelsContainer