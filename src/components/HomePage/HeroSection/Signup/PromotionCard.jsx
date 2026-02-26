function PromotionCard({bg, children}) {
  return (
    <div className={`${bg} h-23.75 w-50 rounded-md text-white text-[16px] pl-7.75 flex items-center`}>{children}</div>
  )
}

export default PromotionCard