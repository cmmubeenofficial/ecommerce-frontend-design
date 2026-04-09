import DealsAndOffersTimeCard from "./DealsAndOffersTimeCard/DealsAndOffersTimeCard"
import { dicountedProds } from "./discoundtedProds"
import DiscountedProds from "./DiscountedProds"

function DealsAndOffers() {
    return (
        <div className="deals-and-offers-container w-full max-w-7xl mx-auto flex flex-col md:flex-row border border-[#DEE2E7] rounded-md bg-white overflow-x-auto md:overflow-hidden">
            <DealsAndOffersTimeCard />
            {dicountedProds.map(prod => (
                <DiscountedProds key={prod.id} prodImg={prod.prodImg} prodName={prod.prodName} discount={prod.discount} />
            ))}
        </div>
    )
}

export default DealsAndOffers