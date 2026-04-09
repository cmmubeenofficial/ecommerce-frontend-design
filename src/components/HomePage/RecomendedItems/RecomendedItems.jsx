import ItemCard from "./ItemCard"
import { itemCardData } from "./itemCardData"

function RecomendedItems() {
    return (
        <>
            <h2 className="text-lg sm:text-xl md:text-[24px] font-semibold">Recommended items</h2>

            {/* items card */}
            <div className="item-cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 md:gap-5">
                {itemCardData.map(itemData => (
                    <ItemCard key={itemData.id} prodImg={itemData.prodImg} price={itemData.price} description={itemData.description} />
                ))}
            </div>
        </>
    )
}

export default RecomendedItems