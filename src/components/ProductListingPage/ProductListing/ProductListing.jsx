import { faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SelectedFilters from "./SelectedFilters"
import { selectedFiltersData } from "./selectedFiltersData"
import ProductCard from "./ProductCard"
import { productCardData } from "./productCardData"

function ProductListing() {
  return (
    <div className="product-listing-container flex flex-col gap-4.5">

      {/* top strip: items count + verified only + featured + grid + bar */}
      <div className="top-strip-container flex items-center justify-between h-15.5 w-230.25 bg-white border border-[#DEE2E7] rounded-md px-3.5">
        <h3>12,911 items in Mobile accessory</h3>

        {/* filters and grid container */}
        <div className="filters-grids-container flex items-center gap-3.25">

          {/* Verified only */}
          <label htmlFor="verifiedOnly" className="flex items-center gap-2.75">
            <input type="checkbox" className="h-5 w-5" />
            Verified only
          </label>

          {/* dropdown */}
          <div className="dropdown-container relative cursor-pointer">
            <select className="appearance-none h-10 w-43 border border-[#DEE2E7] pl-2.25 rounded-md cursor-pointer">
              <option value="featured">Featured</option>
            </select>

            <FontAwesomeIcon icon={faAngleDown} size="sm" className="text-[#8B96A5] absolute left-[85%] top-[32%]" />
          </div>

          {/* grid and bar buttons */}
          <div className="grid-bar-container flex h-10 w-19 border border-[#DEE2E7] rounded-md overflow-hidden cursor-pointer">

            {/* grid view */}
            <div className="grid-view flex items-center justify-center bg-[#EFF2F4] h-10 w-9.5 border-r border-[#DEE2E7]">
              <img src="/public/icons/grid-icon.svg" alt="grid icon" />
            </div>

            <div className="bar-view flex items-center justify-center h-10 w-9.5">
              <img src="/public/icons/bar-icon.svg" alt="bar icon" />
            </div>
          </div>
        </div>
      </div>

      {/* filters tage + clear filter button */}
      <div className="filter-tag-clear-filter flex gap-2">
        {selectedFiltersData.map(data => (
          <SelectedFilters key={data.id} filterName={data.filterName} />
        ))}

        {/* clear filter button */}
        <button className="text-[#0D6EFD] pl-2 cursor-pointer">Clear all filter</button>
      </div>

      {/* product cards */}
      <div className="product-cards-container flex flex-wrap gap-4.5">
        {productCardData.map(productDetail => (
          <ProductCard key={productDetail.id} productDetails={productDetail} />
        ))}
      </div>

      {/* bottom pagination */}
      <div className="pagination-container flex justify-end items-center gap-2 mt-4 w-230.25">

        {/* Show count dropdown */}
        <div className="relative">
          <select className="appearance-none h-10 w-32 border border-[#DEE2E7] rounded-md px-3 bg-white cursor-pointer pr-8">
            <option value="10">Show 10</option>
            <option value="20">Show 20</option>
          </select>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-[#8B96A5] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>

        {/* Page numbers group */}
        <div className="flex border border-[#DEE2E7] rounded-md overflow-hidden bg-white">

          {/* Left Arrow */}
          <button className="h-10 w-11 flex items-center justify-center border-r border-[#DEE2E7] hover:bg-gray-50 cursor-pointer">
            <FontAwesomeIcon icon={faAngleLeft} className="text-[#1C1C1C]" />
          </button>

          {/* Pages */}
          <ul className="flex items-center">
            <li className="h-10 w-11 flex items-center justify-center border-r border-[#DEE2E7] bg-[#EFF2F4] font-semibold text-[#1C1C1C]">
              1
            </li>
            <li className="h-10 w-11 flex items-center justify-center border-r border-[#DEE2E7] hover:bg-gray-50 cursor-pointer">
              2
            </li>
            <li className="h-10 w-11 flex items-center justify-center border-r border-[#DEE2E7] hover:bg-gray-50 cursor-pointer">
              3
            </li>
          </ul>

          {/* Right Arrow */}
          <button className="h-10 w-11 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
            <FontAwesomeIcon icon={faAngleRight} className="text-[#1C1C1C]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductListing