import ItemCard from "./ItemCard"
import { itemCardData } from "./itemCardData"

function RecomendedItems() {
    return (
        <>
            <h2 className="text-[24px] font-semibold">Recommended items</h2>

            {/* items card */}
            <div className="item-cards flex flex-wrap gap-5">
                {itemCardData.map(itemData => (
                    <ItemCard key={itemData.id} prodImg={itemData.prodImg} price={itemData.price} description={itemData.description} />
                ))}
            </div>
        </>
    )
}

export default RecomendedItems