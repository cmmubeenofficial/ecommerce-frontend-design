import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

function SelectedFilters({ id, filterName }) {
    return (
        <>
            <button key={id} className="text-[#505050] bg-white border border-[#0D6EFD] flex items-center gap-2.5 px-2 py-0.99 rounded-[5px] cursor-pointer">{filterName}
                <FontAwesomeIcon icon={faXmark} size="sm" className="text-[#8B96A5]" />
            </button>
        </>
    )
}

export default SelectedFilters