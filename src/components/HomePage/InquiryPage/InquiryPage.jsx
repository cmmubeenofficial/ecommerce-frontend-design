import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

function InquiryPage() {
  return (
    <div className="inquiry-page-container flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto h-auto md:h-105 bg-[url('/image/backgrounds/inquiry.png')] bg-cover bg-center bg-no-repeat pt-6 md:pt-6.75 px-4 md:px-0">

      {/* text content container */}
      <div className="text-content-container h-auto md:h-34.75 w-full md:w-110 text-white pl-4 md:pl-8 pb-4 md:pb-0">
        <h2 className="text-2xl md:text-[32px] font-semibold leading-8 md:leading-10 pb-2 md:pb-3.5">An easy way to send requests to all suppliers</h2>
        <p className="leading-5 text-[14px] md:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      </div>

      {/* send inquiry container */}
      <div className="send-inquiry-form flex flex-col gap-3.75 h-auto md:h-86.5 w-full md:w-122.75 bg-white rounded-md mr-0 md:mr-6.75 pl-3.75 my-4 md:my-0">
        <h4 className="text-[18px] md:text-[20px] font-semibold pt-5.5">Send quote to suppliers</h4>
        <input type="text" className="border border-[#DEE2E7] h-10 w-full rounded-md placeholder:text-black pl-2.5" placeholder="What item you need?" />

        {/* Type more details */}
        <textarea type="text" className="border border-[#DEE2E7] h-18.25 w-full rounded-md placeholder:text-[#8B96A5] pl-2.5 pt-1.5 focus:outline-none" placeholder="Type more details" />

        {/* quantity container */}
        <div className="quantity-container flex flex-col sm:flex-row gap-2">
          <input type="number" className="h-10 w-full sm:w-60 border border-[#DEE2E7] rounded-md appearance-none placeholder:text-black pl-2.5" placeholder="Quantity" />

          {/* options dropdown container */}
          <div className="options-container relative">
            <select className="appearance-none h-10 w-full sm:w-27.75 border border-[#DEE2E7] rounded-md pl-2.5">
              <option value="Pcs">Pcs</option>
              <option value="Kgs">Kgs</option>
            </select>

            {/* dropdown button */}
            <div className="arrow-container absolute top-1.5 left-21 text-[#8B96A5] cursor-pointer">
              <FontAwesomeIcon icon={faChevronDown} size='xs' />
            </div>

          </div>
        </div>

        {/* Send inquiry button */}
        <button className="send-inquory bg-linear-to-r from-[#127FFF] to-[#0067FF] text-white font-medium h-10 w-full sm:w-32 rounded-md cursor-pointer">Send inquiry</button>
      </div>
    </div>
  )
}

export default InquiryPage