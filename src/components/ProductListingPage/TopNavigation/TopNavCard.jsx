import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

function TopNavCard({id, catName}) {
  return (
    <div key={id} className="top-nav-card">
      <button className="flex items-center gap-1.75 text-[#8B96A5]">{catName}
      <FontAwesomeIcon icon={faAngleRight} size="sm" />
      </button>
    </div>
  )
}

export default TopNavCard