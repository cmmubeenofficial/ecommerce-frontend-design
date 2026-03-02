import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart"
import RatingStars from "../../RatingStars/RatingStars"
import { useNavigate } from "react-router-dom"

function ProductCard({ id, productDetails }) {

    // props distructuring
    const { productImg, dicountedPrice, actualPrice, rating, description } = productDetails

    const navigate = useNavigate()

    return (
        <div key={id} className="product-card h-101.25 w-73.75 border border-[#DEE2E7] bg-white rounded-md cursor-pointer"
            onClick={() => navigate("/products/product-details")}
        >
            {/* product image */}
            <div className="product-image flex justify-center items-center py-6 px-9 border-b border-[#EFF2F4]">
                <img
                    src={`/Image/produc-listing-page/${productImg}.png`}
                    alt={`${description[0]} ${description[1]} image`}
                    className="h-[202.4px]"
                />
            </div>

            {/* price + rating + product description > heart button */}
            <div className="price-rating-heart flex justify-between py-4 px-4">

                {/* price + rating */}
                <div className="pricing-rating-prodDesc">
                    <div className="pricing flex items-end">
                        <p className="text-[18px] font-semibold">${dicountedPrice}</p>
                        <p className="line-through text-[#8B96A5]">${actualPrice}</p>
                    </div>

                    {/* ratings component render */}
                    <div className="ratings flex gap-2">
                        <RatingStars rating={rating} />
                        <p className="text-[#FF9017]">{rating}</p>
                    </div>

                    {/* product description */}
                    <p className="text-[#606060] pt-3.5">{description[0]} <br /> {description[1]}</p>
                </div>

                {/* heart button */}
                <div className="heart-button h-10 w-10 rounded-md bg-white border border-[#DEE2E7] text-[#0D6EFD] flex justify-center items-center cursor-pointer">
                    <FontAwesomeIcon icon={faHeart} size="lg" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard