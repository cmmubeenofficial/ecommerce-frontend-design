import ServicesCard from "./ServicesCard"
import { servicesCardData } from "./servicesCardData"

function ExtraServices() {
    return (
        <>
            <h3 className="text-xl md:text-[24px] font-semibold">Our extra services</h3>

            <div className="services-cards-container flex flex-wrap gap-3 md:gap-[20.2px]">
                {/* Services Card */}
                {servicesCardData.map(cardData => (
                    <ServicesCard key={cardData.id} cardData={cardData} />
                ))}
            </div>
        </>
    )
}

export default ExtraServices