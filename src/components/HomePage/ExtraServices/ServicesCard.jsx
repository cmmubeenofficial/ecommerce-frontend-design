function ServicesCard({ id, cardData }) {

    const { topImg, icon, text } = cardData

    return (
        <div key={id} className="services-card-container h-50 w-70 bg-white border border-[#E0E0E0] rounded-md overflow-hidden relative" >

            {/* image of industry hub */}
            <div className="img-container overflow-hidden relative">
                <img src={`/Image/backgrounds/${topImg}.png`} alt="industry hub image"
                    className="contrast-200 brightness-75"
                />

                {/* black mask layer */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* icon */}
            <div className="icon-container h-13.75 w-13.75 bg-[#D1E7FF] border-2 border-[#FFFFFF] rounded-full flex justify-center items-center absolute top-[45%] right-4.25">
                <img src={`/icons/${icon}.svg`} alt={`${icon} icon`} />
            </div>

            {/* text */}
            <h4 className="text-[16px] font-medium pl-4.25 pt-4.25">{text[0]} <br />{text[1]}</h4>
        </div>
    )
}

export default ServicesCard