import TimeCard from "./TimeCard"

function DealsAndOffersTimeCard() {
  return (
    <div className="flex flex-col w-70 h-58.75 bg-white p-5 border-r border-[#DEE2E7] shrink-0">
      {/* Header Section */}
      <div className="space-y-1">
        <h2 className="text-[#1C1C1C] text-[20px] font-semibold leading-tight tracking-tight">
          Deals and offers
        </h2>
        <p className="text-[#8B96A5] text-[16px] font-normal">
          Hygiene equipments
        </p>
      </div>

      {/* Time Cards Container */}
      <div className="flex gap-1.5 mt-6 mb-2">
        <TimeCard value="04" label="Days" datetime="P4D" />
        <TimeCard value="13" label="Hour" datetime="PT13H" />
        <TimeCard value="34" label="Min" datetime="PT34M" />
        <TimeCard value="56" label="Sec" datetime="PT56S" />
      </div>
    </div>
  )
}

export default DealsAndOffersTimeCard