import React from 'react'
import HomeSection2Styles from '../../Styles/SectionsStyles/HomeSectionsStyles/HomeSection2Styles'
import HotelsContainer from '../../Components/HotelsContainer'
import { Hotels } from '../../Constants/Hotels/Hotels'

function HomeSection2() {
    return (
        <HomeSection2Styles>
            <div className='Text2'>
                <h2>Hotels</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
            <div className='hotel-Front-Container'>
                {Hotels.map((infos,idx) =>(
                    <div className='Hotels' key={idx}>
                        <HotelsContainer
                            image={infos.image}
                            alt={infos.alt}
                            hotelName={infos.hotelName}
                            cost={infos.cost}
                            wifi={infos.wifi}
                            service={infos.service}
                            bed={infos.bed}
                            person={infos.person}
                            style={infos.style}
                        />
                    </div>
                        ))}
                    </div>
        </HomeSection2Styles>
    )
}

export default HomeSection2