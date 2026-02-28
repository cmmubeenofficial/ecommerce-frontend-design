import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope"

function Newsletter() {
    return (
        <div className="newsletter-container flex flex-col justify-center items-center bg-[#EFF2F4] h-47.5 -mx-20">
            <h4 className="text-[20px] font-semibold">Subscribe on our newsletter</h4>
            <p className="text-[#606060]">Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="email-input-btn flex gap-3.5 relative pt-10">
                <input type="email" className="h-10 w-68.5 pl-8.75 border border-[#DEE2E7] bg-white placeholder:text-[#8B96A5] text-[15px] text-[#8B96A5] rounded-md" placeholder="Email" />

                {/* email icon */}
                <div className="email-icon absolute top-[61%] left-2.5 text-[#8B96A5]">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </div>

                {/* subscribe button */}
                <button className="font-medium h-10 w-27.5 text-white bg-linear-to-r from-[#127FFF] to-[#0067FF] rounded-md cursor-pointer">Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter