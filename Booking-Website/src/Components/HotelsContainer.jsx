import React from 'react'

function HotelsContainer({image, alt, hotelName, cost, wifi, service, bed, person, style}){

    const StyledHotel = style;

    return (
        <StyledHotel>           
            <img src={image} alt={alt} />
            <h3>{hotelName}</h3>
            <hr/>
            <p>{cost}</p>
            <p>{wifi}</p>
            <p>{service}</p>
            <p>{bed}</p>
            <p>{person}</p>
        </StyledHotel>
    )
}

export default HotelsContainer