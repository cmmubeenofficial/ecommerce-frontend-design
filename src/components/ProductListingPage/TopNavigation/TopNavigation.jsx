import TopNavCard from "./TopNavCard"
import { topNavCardData } from "./topNavCardData"

function TopNavigation() {
  return (
    <>

    {/* top nav */}
      <div className="top-nav-container flex gap-2">
        {topNavCardData.map(data => (
          <TopNavCard key={data.id} catName={data.catName} />
        ))}
      </div>
    </>
  )
}

export default TopNavigation