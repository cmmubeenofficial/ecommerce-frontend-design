import DealsAndOffers from "../components/HomePage/DealsAndOffers/DealsAndOffers"
import ExtraServices from "../components/HomePage/ExtraServices/ExtraServices"
import HeroSection from "../components/HomePage/HeroSection/HeroSection"
import InquiryPage from "../components/HomePage/InquiryPage/InquiryPage"
import Newsletter from "../components/Footer/Newsletter/Newsletter"
import { electronicsAndGadgets } from "../components/HomePage/ProdsListing/electronicsAndGadgets"
import { homeAndOutdoorProdData } from "../components/HomePage/ProdsListing/homeAndOutdoorProdData"
import ProdsListing from "../components/HomePage/ProdsListing/ProdsListing"
import RecomendedItems from "../components/HomePage/RecomendedItems/RecomendedItems"
import SuppliersByOrigin from "../components/HomePage/SuppliersByOrigin/SuppliersByOrigin"

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