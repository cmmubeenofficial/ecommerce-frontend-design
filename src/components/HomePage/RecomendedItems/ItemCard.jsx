function ItemCard({ id, prodImg, price, description }) {

    return (
        <div id={id} className="item-card-container bg-white border border-[#E0E0E0] h-77.5 w-55 rounded-md flex flex-col items-center justify-between py-4.5">

            {/* products image */}
            <div className="prod-img flex justify-center w-[172.44px]">
                <img src={prodImg} alt="product image" />
            </div>

            {/* price and description */}
            <div className="price-n-desc w-46.5">
                <h4 className="font-medium">${price}</h4>
                <p className="text-[#8B96A5]">{description}</p>
            </div>
        </div>
    )
}

export default ItemCard