import HomePage from "../../Pages/HomePage"
import ProductDetails from "../../Pages/ProductDetail"
import ProductListingPage from "../../Pages/ProductListingPage"

function ComponentsRender() {
  return (
    <div className="compnents-container flex flex-col gap-5 py-3.75 px-20">
        {/* <HomePage /> */}
        {/* <ProductListingPage /> */}
        <ProductDetails />
    </div>
  )
}

export default ComponentsRender