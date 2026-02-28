function OriginCard({ key, originData }) {

    const { flagImg, originName, webURL } = originData

    return (
        <div key={key} className="origin-card h-9 w-55.25 flex items-center gap-1.75">

            {/* origin image */}
            <div className="img-container">
                <img src={`/flags/${flagImg}@2x.png`} alt={`${originName} flag image`} />
            </div>

            {/* origin name + website handle */}
            <div className="origin-website-container">
                <h3 className='-mb-2'>{originName}</h3>
                <a className='text-[13px] text-[#8B96A5]'>{webURL}</a>
            </div>
        </div>
    )
}

export default OriginCard