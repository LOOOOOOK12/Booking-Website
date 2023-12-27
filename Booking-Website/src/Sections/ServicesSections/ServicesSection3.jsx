import ServicesGridContainer from "../../Components/servicesGridContainer"
import { servicesData3 } from "../../Constants/Services-Constants/servicesData3"

function ServicesSection3() {
    return (
        <div className='px-16 py-28 flex flex-col justify-center items-center gap-12'>
            <h1 className='text-5xl text-Rich-Black font-bold w-1/2 text-center'>We Offer</h1>
            <div className='grid grid-cols-3 gap-6'>
                {servicesData3.map((G)=>(
                    <ServicesGridContainer
                        logos = {G.logos}
                        desc = {G.desc}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServicesSection3