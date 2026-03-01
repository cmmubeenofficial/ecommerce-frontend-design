import Category from "../Components/ProductListingPage/Category/Category"
import ProductListing from "../Components/ProductListingPage/ProductListing/ProductListing"
import TopNavigation from "../Components/ProductListingPage/TopNavigation/TopNavigation"

function ProductListingPage() {
  return (
    <>
      <TopNavigation />

      {/* left and right side layout */}
      <div className="left-right-container flex items-center">
        <Category />
        <ProductListing />
      </div>
    </>
  )
}

export default ProductListingPage