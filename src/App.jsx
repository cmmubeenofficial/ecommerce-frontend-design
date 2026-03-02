import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Haeder from "./Components/Header/Haeder"
import HomePage from "./Pages/HomePage"
import ProductListingPage from "./Pages/ProductListingPage"
import ProductDetail from "./Pages/ProductDetail"

function App() {

  return (
    <>
      <Haeder />

      <div className="compnents-container flex flex-col gap-5 py-3.75 px-20">
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/products/product-details" element={<ProductDetail />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
