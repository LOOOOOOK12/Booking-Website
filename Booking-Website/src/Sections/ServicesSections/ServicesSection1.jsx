import ServicesContainer from "../../Components/ServicesContainer"
import {servicesData} from "../../Constants/Services-Constants/servicesData"

function ServicesSection1() {
    return (
        <div className='px-16 py-28 flex flex-col items-center justify-center gap-16'>
            <h1 className="text-3xl w-full text-Rich-Black font-bold text-center md:w-1/2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore”</h1>
            <div className='flex flex-col gap-6 md:flex md:flex-row md:gap-6'>
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