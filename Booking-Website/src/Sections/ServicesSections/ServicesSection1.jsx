import ServicesContainer from "../../Components/ServicesContainer"
import {servicesData} from "../../Constants/Services-Constants/servicesData"

function ServicesSection1() {
    return (
        <div className='px-16 py-28 flex flex-col items-center justify-center gap-12'>
            <h1 className="text-5xl mt-20 text-Rich-Black">We offer Quality Time and Experience</h1>
            <div className='flex gap-12 w-full'>
                {servicesData.map((services)=>(
                        <ServicesContainer
                        img = {services.img}
                        alt = {services.alt}
                        head ={services.head}
                        paragraph = {services.paragraph}
                    />   
                ))}
            </div>
        </div>
    )
}

export default ServicesSection1