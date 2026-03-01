import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";
import { useState } from "react";
import Filters from "./Filters";

function SelectionFilters({ filterName, filterData }) {

  // state management
  const [filters, setFilters] = useState(filterData);
  const [isOpen, setIsOpen] = useState(false);

  // handler functions
  const handleToggle = (id) => {
    setFilters(prev =>
      prev.map(f =>
        f.id === id ? { ...f, isCheck: !f.isCheck } : f
      )
    );
  };

  // toggle button (open/close)
  const toggleSection = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="selection-filters-comp border-t border-t-[#DEE2E7] pt-3.5 pb-4.25">

      {/* header */}
      <div
        onClick={toggleSection}
        className="filter-cat-dropdown-icon flex items-center justify-between cursor-pointer"
      >
        <h3 className="font-semibold">{filterName}</h3>

        <FontAwesomeIcon
          icon={faAngleUp}
          size="sm"
          className={`text-[#8B96A5] transition-transform duration-300 ${
            !isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* filters list */}
      {isOpen && (
        <div className="leading-10">
          {filters.map(filter => (
            <Filters
              key={filter.id}
              filterData={filter}
              onToggle={() => handleToggle(filter.id)}
            />
          ))}

          <button className="text-[#0D6EFD] cursor-pointer">
            See all
          </button>
        </div>
      )}
    </div>
  );
}

export default SelectionFilters;