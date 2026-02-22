import DealsAndOffersTimeCard from "./DealsAndOffersTimeCard/DealsAndOffersTimeCard"
import { dicountedProds } from "./discoundtedProds"
import DiscountedProds from "./DiscountedProds"

function DealsAndOffers() {
    return (
        <div className="deals-and-offers-container flex border-t border-b border-l border-[#DEE2E7] rounded-md bg-white">
            <DealsAndOffersTimeCard />
            {dicountedProds.map(prod => (
                <DiscountedProds key={prod.id} prodImg={prod.prodImg} prodName={prod.prodName} discount={prod.discount} />
            ))}
        </div>
    )
}

export default DealsAndOffers