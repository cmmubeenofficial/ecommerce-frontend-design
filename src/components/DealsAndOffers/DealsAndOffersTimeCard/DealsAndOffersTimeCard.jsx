import TimeCard from "./TimeCard"

function DealsAndOffersTimeCard() {
  return (
    <div className="deals-and-offers-time-card w-73.75 h-60 leading-6 pl-5.25 pt-6.25 rounded-l-md border-r border-r-[#DEE2E7]">
      <h2 className="text-[20px] font-semibold">Deals and offers</h2>
      <p className="text-[#8B96A5]">Hygiene equipments</p>

      {/* time cards */}
      <div className="time-container flex gap-1.5 pt-4.5">
        <TimeCard value="04" label="Days" datetime="P4D" />
        <TimeCard value="13" label="Hour" datetime="PT13H" />
        <TimeCard value="34" label="Min" datetime="PT34M" />
        <TimeCard value="36" label="Sec" datetime="PT36S" />
      </div>
    </div>
  )
}

export default DealsAndOffersTimeCard