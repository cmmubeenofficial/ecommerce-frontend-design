import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp" 
import SelectionFilters from "./SelectionFilters"

function Category() {
    return (
        <div className="category-container border-t border-t-[#DEE2E7] leading-10 w-60 pt-3.5">
            
            {/* category and drowpdown icon container */}
            <div className="cat-dropdown-icon flex items-center justify-between">
                <h3 className='font-semibold'>Category</h3>
                <FontAwesomeIcon icon={faAngleUp} className="text-[#8B96A5]" />
            </div>

            {/* categories */}
            <ul className="categories  pb-4.25">
                <li className='text-[#505050] cursor-pointer'>Mobile accessory</li>
                <li className='text-[#505050] cursor-pointer'>Electronics</li>
                <li className='text-[#505050] cursor-pointer'>Smartphones</li>
                <li className='text-[#505050] cursor-pointer'>Modern tech</li>
                <li className='text-[#0D6EFD] cursor-pointer'>See all</li>
            </ul>

            {/* selection filters */}
            <SelectionFilters />
        </div>
    )
}

export default Category