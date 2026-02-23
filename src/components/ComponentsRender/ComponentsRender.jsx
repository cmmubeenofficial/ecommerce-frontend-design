import DealsAndOffers from "../DealsAndOffers/DealsAndOffers"
import HeroSection from "../HeroSection/HeroSection"

function ComponentsRender() {
  return (
    <div className="compnents-container flex flex-col items-center gap-3.75 py-3.75 px-20">
        <HeroSection />
        <DealsAndOffers />
    </div>
  )
}

export default ComponentsRender