function Filters({ filterData, onToggle }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer">
      <input
        type="checkbox"
        checked={filterData.isCheck}
        onChange={onToggle}
        className="h-5 w-5 accent-[#0D6EFD] rounded-[5px]"
      />
      {filterData.label}
    </label>
  )
}

export default Filters