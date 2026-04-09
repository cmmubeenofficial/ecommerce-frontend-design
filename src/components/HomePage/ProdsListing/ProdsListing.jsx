import { useNavigate } from "react-router-dom"
import ProdCard from "./ProdCard"

function ProdsListing({ title, bgImg, products }) {

    const navigate = useNavigate()

    return (
        <div className="prods-listing-container flex flex-col md:flex-row w-full max-w-7xl mx-auto border border-[#E0E0E0] rounded-md bg-white">

            {/* Source Now Button Card - hidden on mobile */}
            <div className={`source-now hidden md:block w-70.75 border-r border-r-[#E0E0E0]
             bg-cover bg-center bg-no-repeat
            pl-4.25`}

                style={{ backgroundImage: `url(/image/backgrounds/${bgImg}.png)` }}
            >
                <h2 className="text-[20px] font-semibold pb-4.25 pt-5.25">{title[0]} <br /> {title[1]} <br /> {title ? title[2] : ""}</h2>
                <button 
                className="font-medium h-10 w-30.75 bg-white border border-white rounded-md cursor-pointer"
                onClick={() => navigate("/products")}
                >Source now</button>
            </div>

            {/* products listing:  Home and Outdoor */}
            <div className="prods-listing w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 p-3 md:p-4">

                {products.map(prodData => (
                    <ProdCard key={prodData.id} prodName={prodData.prodName} price={prodData.price} prodImg={prodData.prodImg} />
                ))}
            </div>

        </div>
    )
}

export default ProdsListing