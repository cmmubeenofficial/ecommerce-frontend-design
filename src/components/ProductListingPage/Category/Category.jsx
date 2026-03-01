import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp"
import { useState } from "react"

function Category() {

    // state management
    const [isOpen, setIsOpen] = useState(true)

    // handler functions
    const toggleCategory = () => setIsOpen(prev => !prev)

    return (
        <div
            onClick={toggleCategory}
            className="category-container border-t border-t-[#DEE2E7] leading-10 w-60 pt-3.5">

            {/* category and drowpdown icon container */}
            <div className="cat-dropdown-icon flex items-center justify-between cursor-pointer">
                <h3 className='font-semibold'>Category</h3>
                <FontAwesomeIcon
                    icon={faAngleUp}
                    size="sm"
                    className={`text-[#8B96A5] transition-transform duration-300
                ${isOpen ? 'rotate-180' : ''}
                `} />
            </div>

            {/* categories */}
            <div 
            className={`category-container overflow-hidden transition-all duration-300 
                ${isOpen ? 'maxh-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <ul className="categories pb-4.25">
                    <li className='text-[#505050] cursor-pointer'>Mobile accessory</li>
                    <li className='text-[#505050] cursor-pointer'>Electronics</li>
                    <li className='text-[#505050] cursor-pointer'>Smartphones</li>
                    <li className='text-[#505050] cursor-pointer'>Modern tech</li>
                    <button><li className='text-[#0D6EFD] cursor-pointer'>See all</li></button>
                </ul>
            </div>

        </div>
    )
}

export default Category