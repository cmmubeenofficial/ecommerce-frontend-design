import DealsAndOffers from "../DealsAndOffers/DealsAndOffers"
import HeroSection from "../HeroSection/HeroSection"
import { electronicsAndGadgets } from "../ProdsListing/electronicsAndGadgets"
import { homeAndOutdoorProdData } from "../ProdsListing/homeAndOutdoorProdData"
import ProdsListing from "../ProdsListing/ProdsListing"

function HomePage() {
    return (
        <>
            <HeroSection />
            <DealsAndOffers />

            {/* Home and Outdoor products */}
            <ProdsListing title={["Home and", "outdoor"]} bgImg={"home-n-outdoor"} products={homeAndOutdoorProdData} />

            {/* Consumer Electronics and Gadgets */}
            <ProdsListing title={["Consumer", "electronics and", "gadgets"]} bgImg={"electronics-n-gadgets"} products={electronicsAndGadgets} />
        </>
    )
}

export default HomePage