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
      <div className="left-right-container flex flex-col lg:flex-row gap-4 md:gap-9">

        {/* category + filters section - hidden on mobile, shown as drawer */}
        <div className="hidden lg:flex flex-col w-60">
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
        <div className="flex-1">
          <ProductListing />
        </div>
      </div>
    </>
  )
}

export default ProductListingPage