import ProdCard from "./ProdCard"
import { prodCardData } from "./prodCardData"

function ProdsListing() {
    return (
        <div className="prods-listing-container flex h-64.25 w-295 border border-[#E0E0E0] rounded-md bg-white">

            {/* Source Now Button Card */}
            <div className="source-now  h-64.25 w-70.75 border-r border-r-[#E0E0E0]
            bg-[url('./Image/backgrounds/home-n-outdoor.png')] bg-cover bg-center bg-no-repeat
            pl-4.25">
                <h2 className="text-[20px] font-semibold pb-4.25 pt-5.25">Home and <br /> outdoor</h2>
                <button className="font-medium h-10 w-30.75 bg-white border border-white rounded-md cursor-pointer">Source now</button>
            </div>

            {/* products listing */}
            <div className="prods-listing w-225 grid grid-cols-4">

                {prodCardData.map(prodData => (
                    <ProdCard key={prodData.id} prodName={prodData.prodName} price={prodData.price} prodImg={prodData.prodImg} />
                ))}
            </div>
        </div>
    )
}

export default ProdsListing