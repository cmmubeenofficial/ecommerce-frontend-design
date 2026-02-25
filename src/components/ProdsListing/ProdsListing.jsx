import ProdCard from "./ProdCard"

function ProdsListing({ title, bgImg, products }) {
    return (
        <div className="prods-listing-container flex w-295 border border-[#E0E0E0] rounded-md bg-white">

            {/* Source Now Button Card ${bgImg} */}
            <div className={`source-now w-70.75 border-r border-r-[#E0E0E0]
            bg-[url('./Image/backgrounds/${bgImg}.png')] bg-cover bg-center bg-no-repeat
            pl-4.25`}>
                <h2 className="text-[20px] font-semibold pb-4.25 pt-5.25">{title[0]} <br /> {title[1]} <br /> {title ? title[2] : ""}</h2>
                <button className="font-medium h-10 w-30.75 bg-white border border-white rounded-md cursor-pointer">Source now</button>
            </div>

            {/* products listing:  Home and Outdoor */}
            <div className="prods-listing w-225 grid grid-cols-4">

                {products.map(prodData => (
                    <ProdCard key={prodData.id} prodName={prodData.prodName} price={prodData.price} prodImg={prodData.prodImg} />
                ))}
            </div>

        </div>
    )
}

export default ProdsListing