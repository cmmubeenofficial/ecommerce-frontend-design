import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faMessage, 
  faBasketShopping, 
  faShield, 
  faGlobe, 
  faCheck, 
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState('Description');
  
  // Base paths
  const detailBasePath = "/alibaba/cloth/product-detail/";
  const sidebarBasePath = "/alibaba/cloth/";

  // Main Gallery Images
  const productImages = [
    "full sleeve shirt (1).png",
    "full sleeve shirt (2).png",
    "full sleeve shirt (3).png",
    "full sleeve shirt (4).png",
    "full sleeve shirt (5).png",
    "full sleeve shirt (6).png"
  ];

  // Sidebar Data
  const sidebarItems = [
    { id: 1, name: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", img: "dress-suit.png" },
    { id: 2, name: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50", img: "t-shirt.png" },
    { id: 3, name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", img: "jacket.png" },
    { id: 4, name: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: "canon-camera.png" },
    { id: 5, name: "New Summer Men's castrol T-Shirts", price: "$7.00 - $99.50", img: "leather-wallet.png" },
  ];

  const [mainImage, setMainImage] = useState(`${detailBasePath}${productImages[0]}`);

  const relatedProducts = [
    { id: 1, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/alibaba/cloth/leather-wallet.png" },
    { id: 2, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/Image/tech/watch.png" },
    { id: 3, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/alibaba/tech/headphone.png" },
    { id: 4, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/alibaba/cloth/canon-camera.png" },
    { id: 5, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/alibaba/tech/stainless-mug.png" },
    { id: 6, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/Image/interior/home-appliance.png" },
  ];

  return (
    <div className="bg-[#F7FAFC] min-h-screen pb-12 font-sans text-[#1C1C1C]">
      
      {/* 1. BREADCRUMBS */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-[#8B96A5] text-base">
        <span>Home</span> <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
        <span>Clothings</span> <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
        <span>Men's wear</span> <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
        <span className="text-[#8B96A5]">Summer clothing</span>
      </nav>

      {/* 2. MAIN PRODUCT CARD */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white border border-[#DEE2E7] rounded-lg p-5 flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: GALLERY */}
          <div className="lg:w-[38%]">
            <div className="border border-[#DEE2E7] rounded-md p-4 flex justify-center mb-4 h-95 items-center bg-white">
              <img src={mainImage} alt="Main" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((imgName, index) => (
                <button 
                  key={index} 
                  onClick={() => setMainImage(`${detailBasePath}${imgName}`)}
                  className={`w-14 h-14 border rounded p-1 ${mainImage === `${detailBasePath}${imgName}` ? 'border-gray-800' : 'border-[#DEE2E7]'}`}
                >
                  <img src={`${detailBasePath}${imgName}`} alt="thumb" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* CENTER: PRODUCT DETAILS */}
          <div className="lg:w-[42%] space-y-3">
            <div className="flex items-center text-[#00B517] gap-2 text-base">
              <FontAwesomeIcon icon={faCheck} /> <span>In stock</span>
            </div>
            
            <h1 className="text-xl font-semibold text-[#1C1C1C] leading-tight">
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </h1>
            
            <div className="flex items-center gap-3 text-base">
              <div className="flex text-[#FF9017] items-center gap-1">
                {[1, 2, 3, 4].map(s => <FontAwesomeIcon key={s} icon={faStar} />)}
                <FontAwesomeIcon icon={faStar} className="text-[#DEE2E7]" />
                <span className="ml-1 font-medium text-[#FF9017]">9.3</span>
              </div>
              <span className="text-[#8B96A5] flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#DBE2E7]"></div> <FontAwesomeIcon icon={faMessage} /> 32 reviews</span>
              <span className="text-[#8B96A5] flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#DBE2E7]"></div> <FontAwesomeIcon icon={faBasketShopping} /> 154 sold</span>
            </div>

            <div className="bg-[#FFF0DF] p-4 flex rounded-sm border-l-0">
              <div className="flex-1 pr-4 border-r border-[#BDC4CD]">
                <p className="text-[#FA3434] text-lg font-bold">$98.00</p>
                <p className="text-[13px] text-[#606060]">50-100 pcs</p>
              </div>
              <div className="flex-1 px-6 border-r border-[#BDC4CD]">
                <p className="text-[#1C1C1C] text-lg font-bold">$90.00</p>
                <p className="text-[13px] text-[#606060]">100-700 pcs</p>
              </div>
              <div className="flex-1 pl-6">
                <p className="text-[#1C1C1C] text-lg font-bold">$78.00</p>
                <p className="text-[13px] text-[#606060]">700+ pcs</p>
              </div>
            </div>

            <div className="space-y-4 pt-2 text-base">
              <div className="grid grid-cols-[130px_1fr] border-b border-[#EEE] pb-3">
                <span className="text-[#8B96A5]">Price:</span> <span className="text-[#505050]">Negotiable</span>
              </div>
              <div className="grid grid-cols-[130px_1fr] border-b border-[#EEE] pb-3">
                <span className="text-[#8B96A5]">Type:</span> <span className="text-[#505050]">Classic shoes</span>
              </div>
              <div className="grid grid-cols-[130px_1fr] border-b border-[#EEE] pb-3">
                <span className="text-[#8B96A5]">Material:</span> <span className="text-[#505050]">Plastic material</span>
              </div>
              <div className="grid grid-cols-[130px_1fr] border-b border-[#EEE] pb-3">
                <span className="text-[#8B96A5]">Design:</span> <span className="text-[#505050]">Modern nice</span>
              </div>
              
              <div className="grid grid-cols-[130px_1fr] border-b border-[#EEE] pb-3 pt-1">
                <span className="text-[#8B96A5]">Customization:</span> 
                <span className="text-[#505050]">Customized logo and design custom packages</span>
              </div>
              <div className="grid grid-cols-[130px_1fr] border-b border-[#EEE] pb-3">
                <span className="text-[#8B96A5]">Protection:</span> <span className="text-[#505050]">Refund Policy</span>
              </div>
              <div className="grid grid-cols-[130px_1fr] pb-3">
                <span className="text-[#8B96A5]">Warranty:</span> <span className="text-[#505050]">2 years full warranty</span>
              </div>
            </div>
          </div>

          {/* RIGHT: SUPPLIER */}
          <div className="lg:w-[20%]">
            <div className="border border-[#DEE2E7] rounded-lg p-4 space-y-4 shadow-sm">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 bg-[#C6E2FF] rounded text-[#4CA7FF] flex items-center justify-center font-bold text-xl">R</div>
                <div>
                  <p className="font-normal text-[#1C1C1C]">Supplier</p>
                  <p className="text-base text-[#1C1C1C]">Guanjoi Trading LLC</p>
                </div>
              </div>
              <hr className="border-[#DEE2E7]" />
              <div className="text-base text-[#8B96A5] space-y-2">
                <p className="flex items-center gap-3">🇩🇪 <span>Germany, Berlin</span></p>
                <p className="flex items-center gap-3"><FontAwesomeIcon icon={faShield} /> Verified Seller</p>
                <p className="flex items-center gap-3"><FontAwesomeIcon icon={faGlobe} /> Worldwide shipping</p>
              </div>
              <div className="space-y-2">
                <button className="w-full bg-[#0D6EFD] text-white py-2 rounded-md font-medium">Send inquiry</button>
                <button className="w-full bg-white border border-[#DEE2E7] text-[#0D6EFD] py-2 rounded-md font-medium">Seller's profile</button>
              </div>
            </div>
            <button className="w-full mt-4 text-[#0D6EFD] font-medium flex items-center justify-center gap-2 hover:underline">
               <FontAwesomeIcon icon={faShield} className="text-gray-400" /> Save for later
            </button>
          </div>
        </div>
      </section>

      {/* 3. TABS AND SIDEBAR */}
      <section className="max-w-7xl mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-[78%] bg-white border border-[#DEE2E7] rounded-lg">
          <div className="flex border-b border-[#DEE2E7]">
            {['Description', 'Reviews', 'Shipping', 'About seller'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium text-base transition-all ${
                  activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-[#8B96A5]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6 text-[#505050] text-base leading-relaxed space-y-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            
            <div className="max-w-xl">
                <table className="w-full border border-[#DEE2E7] text-left">
                <tbody>
                    <tr className="border-b border-[#DEE2E7]"><td className="p-3 bg-[#F7F7F7] border-r border-[#DEE2E7] w-1/3 text-[#505050]">Model</td><td className="p-3">#8786867</td></tr>
                    <tr className="border-b border-[#DEE2E7]"><td className="p-3 bg-[#F7F7F7] border-r border-[#DEE2E7] text-[#505050]">Style</td><td className="p-3">Classic style</td></tr>
                    <tr className="border-b border-[#DEE2E7]"><td className="p-3 bg-[#F7F7F7] border-r border-[#DEE2E7] text-[#505050]">Certificate</td><td className="p-3">ISO-898921212</td></tr>
                    <tr className="border-b border-[#DEE2E7]"><td className="p-3 bg-[#F7F7F7] border-r border-[#DEE2E7] text-[#505050]">Size</td><td className="p-3">34mm x 450mm x 19mm</td></tr>
                    <tr><td className="p-3 bg-[#F7F7F7] border-r border-[#DEE2E7] text-[#505050]">Memory</td><td className="p-3">36GB RAM</td></tr>
                </tbody>
                </table>
            </div>

            <ul className="space-y-2 text-[#505050]">
                <li className="flex items-center gap-2 text-[#505050]"><FontAwesomeIcon icon={faCheck} className="text-[#8B96A5] text-sm"/> Some great feature name here</li>
                <li className="flex items-center gap-2 text-[#505050]"><FontAwesomeIcon icon={faCheck} className="text-[#8B96A5] text-sm"/> Lorem ipsum dolor sit amet, consectetur</li>
                <li className="flex items-center gap-2 text-[#505050]"><FontAwesomeIcon icon={faCheck} className="text-[#8B96A5] text-sm"/> Duis aute irure dolor in reprehenderit</li>
                <li className="flex items-center gap-2 text-[#505050]"><FontAwesomeIcon icon={faCheck} className="text-[#8B96A5] text-sm"/> Some great feature name here</li>
            </ul>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="lg:w-[22%] bg-white border border-[#DEE2E7] rounded-lg p-4">
          <h3 className="font-semibold text-[#1C1C1C] mb-4">You may like</h3>
          <div className="space-y-5">
            {sidebarItems.map(item => (
                <div key={item.id} className="flex gap-3">
                    <div className="w-20 h-20 border border-[#DEE2E7] rounded p-1 shrink-0 flex items-center justify-center">
                        <img src={`${sidebarBasePath}${item.img}`} alt={item.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="py-1">
                        <p className="text-base text-[#1C1C1C] leading-tight line-clamp-2">{item.name}</p>
                        <p className="text-base text-[#8B96A5] mt-1">{item.price}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RELATED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white border border-[#DEE2E7] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-5">Related products</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedProducts.map(product => (
              <div key={product.id} className="space-y-3 cursor-pointer group">
                <div className="aspect-square bg-[#EEEEEE] border border-[#DEE2E7] rounded-md p-6 flex items-center justify-center">
                  <img src={product.img} alt={product.name} className="max-h-full object-contain" />
                </div>
                <div>
                    <p className="text-base text-[#505050] line-clamp-2">{product.name}</p>
                    <p className="text-base text-[#8B96A5] mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUPER DISCOUNT STRIP (NEW ADDITION) */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-[#237CFF] rounded-lg p-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white">
            <h2 className="text-2xl font-semibold">Super discount on more than 100 USD</h2>
            <p className="text-white/80 mt-1 text-base">Have you ever finally just write dummy info</p>
          </div>
          <button className="bg-[#FF9017] text-white px-5 py-2.5 rounded-md font-medium hover:bg-[#e68215] transition-colors whitespace-nowrap">
            Shop now
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default ProductDetail;