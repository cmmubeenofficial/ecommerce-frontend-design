import Category from "../components/ProductListingPage/Category/Category"
import SelectionFilters from "../components/ProductListingPage/SelectionFilters/SelectionFilters"
import ProductListing from "../components/ProductListingPage/ProductListing/ProductListing"
import TopNavigation from "../components/ProductListingPage/TopNavigation/TopNavigation"
import { brandsFilterData } from "../components/ProductListingPage/SelectionFilters/brandsFilterData"
import { featuresFilterData } from "../components/ProductListingPage/SelectionFilters/featuresFilterData"

function ProductListingPage() {
  return (
    <>
      <TopNavigation />

      {/* left and right side layout */}
      <div className="left-right-container flex gap-9">

        {/* category + filters section */}
        <div className="flex flex-col">
          <Category />

          {/* filters selection */}
          <SelectionFilters filterName={"Brands"} filterData={brandsFilterData} />
          <SelectionFilters filterName={"Features"} filterData={featuresFilterData} />
          <SelectionFilters filterName={"Price range"} filterData={featuresFilterData} />
          <SelectionFilters filterName={"Condition"} filterData={featuresFilterData} />
          <SelectionFilters filterName={"Ratings"} filterData={featuresFilterData} />
          <SelectionFilters filterName={"Manufacturer"} filterData={featuresFilterData} />
        </div>

        {/* product listing */}
        <ProductListing />
      </div>
    </>
  )
}

export default ProductListingPage