function DiscountedProds({ id, prodImg, prodName, discount }) {
  return (
    <div 
      id={id} 
      className="flex flex-col items-center justify-center w-full min-w-35 h-58.75 bg-white border-r border-[#DEE2E7] last:border-r-0 hover:shadow-sm transition-shadow cursor-pointer p-4"
    >
      {/* Image Container: Fixed height with object-contain to keep logos/products proportional */}
      <div className="flex items-center justify-center h-32.5 w-full mb-3">
        <img 
          src={prodImg} 
          alt={`${prodName}`} 
          className="max-h-full max-w-30 object-contain"
        />
      </div>

      {/* Product Name: Centered, small, and neutral color */}
      <h2 className="text-[#1C1C1C] text-[14px] font-normal text-center mb-2 line-clamp-1 px-2">
        {prodName}
      </h2>

      {/* Discount Badge: Professional red with subtle background as seen in "Deals and offers" */}
      <span className="inline-flex items-center justify-center px-3 py-1 text-[#EB001B] font-semibold text-[13px] bg-[#FFE3E3] rounded-full">
        -{discount}%
      </span>
    </div>
  );
}

export default DiscountedProds;