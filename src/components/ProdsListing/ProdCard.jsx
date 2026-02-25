function ProdCard({ id, prodName, price, prodImg }) {
    return (
        <div id={id} className="product-card flex justify-between h-31.75 w-[224.06px] border-r border-b border-[#E0E0E0] nth-[4n]:border-r-0 nth-last-[-n+4]:border-b-0">

            {/* left text conatiner */}
            <div className="left-text-container pl-3.75 pt-5.5">
                <h3 className="text-[#1C1C1C]">{ prodName }</h3>
                <p className="text-[#8B96A5] text-[13px]">From</p>
                <p className="text-[#8B96A5] text-[13px]">USD {price}</p>
            </div>

            {/* image container */}
            <div className="img-container pt-10">
                <img className="w-[75.04px]" src={`${prodImg}.png`} alt={`${prodName} image`} />
            </div>
        </div>

    )
}

export default ProdCard