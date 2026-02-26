function TimeCard({ value, label, datetime }) {
    return (
        <div className="flex flex-col items-center justify-center bg-[#606060] text-white h-12.5 w-11.25 rounded-sm">
            <time dateTime={datetime} className="font-bold">{value}</time>
            <p className="text-[13px]">{label}</p>
        </div>
    )
}

export default TimeCard