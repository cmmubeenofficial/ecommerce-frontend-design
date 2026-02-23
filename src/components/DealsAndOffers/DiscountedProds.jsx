function DiscountedProds({ id, prodImg, prodName, discount }) {
  return (
    <div id={id} className="prod-card-container flex flex-col justify-center items-center gap-3 h-60 w-44.75 border-r border-r-[#DEE2E7] last:border-r-0">
      <div className="img-container h-[121.33px]">
        <img src={prodImg} alt={`${prodName} image`} />
      </div>

      <h2>{prodName}</h2>
      <button className="text-[#EB001B] font-medium text-[14px] bg-[#FFE3E3] h-7 w-15.25 rounded-[29px]">{discount}%</button>
    </div>
  )
}

export default DiscountedProds