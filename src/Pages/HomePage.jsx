import DealsAndOffers from "../Components/HomePage/DealsAndOffers/DealsAndOffers"
import ExtraServices from "../Components/HomePage/ExtraServices/ExtraServices"
import HeroSection from "../Components/HomePage/HeroSection/HeroSection"
import InquiryPage from "../Components/HomePage/InquiryPage/InquiryPage"
import { electronicsAndGadgets } from "../Components/HomePage/ProdsListing/electronicsAndGadgets"
import { homeAndOutdoorProdData } from "../Components/HomePage/ProdsListing/homeAndOutdoorProdData"
import ProdsListing from "../Components/HomePage/ProdsListing/ProdsListing"
import RecomendedItems from "../Components/HomePage/RecomendedItems/RecomendedItems"
import SuppliersByOrigin from "../Components/HomePage/SuppliersByOrigin/SuppliersByOrigin"

function HomePage() {
    return (
        <>
            <HeroSection />
            <DealsAndOffers />

            {/* Home and Outdoor products */}
            <ProdsListing title={["Home and", "outdoor"]} bgImg={"home-n-outdoor"} products={homeAndOutdoorProdData} />

            {/* Consumer Electronics and Gadgets */}
            <ProdsListing title={["Consumer", "electronics and", "gadgets"]} bgImg={"electronics-n-gadgets"} products={electronicsAndGadgets} />

            {/* inquiry page */}
            <InquiryPage />

            {/* Recomended items */}
            <RecomendedItems />

            {/* Our Extra Services */}
            <ExtraServices />

            {/* Suppliers By Origin */}
            <SuppliersByOrigin />
        </>
    )
}

export default HomePage