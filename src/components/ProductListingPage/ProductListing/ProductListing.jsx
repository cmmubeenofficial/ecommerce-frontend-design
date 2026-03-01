import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SelectedFilters from "./SelectedFilters"
import { selectedFiltersData } from "./selectedFiltersData"

function ProductListing() {
  return (
    <div className="product-listing-container flex flex-col gap-4.5">

      {/* top strip: items count + verified only + featured + grid + bar */}
      <div className="top-strip-container flex items-center justify-between h-15.5 w-232.5 bg-white border border-[#DEE2E7] rounded-md px-3.5">
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
    </div>
  )
}

export default ProductListing