import DealsAndOffers from "../DealsAndOffers/DealsAndOffers"
import HeroSection from "../HeroSection/HeroSection"
import ProdsListing from "../ProdsListing/ProdsListing"

function ComponentsRender() {
  return (
    <div className="compnents-container flex flex-col items-center gap-3.75 py-3.75 px-20">
        <HeroSection />
        <DealsAndOffers />
        <ProdsListing />
    </div>
  )
}

export default ComponentsRender