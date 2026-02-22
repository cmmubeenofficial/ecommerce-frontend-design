import PromotionCard from './PromotionCard'
import SignupCard from './SignupCard'

function SignupSection() {
  return (
    <>
      <SignupCard />

      {/* Deals card */}
      <PromotionCard bg={"bg-[#F38332]"} >
        <>
          Get US $10 off <br /> with a new <br /> supplier
        </>
      </PromotionCard>

      {/* Qoutes card */}
      <PromotionCard bg={"bg-[#55BDC3]"} >
        <>
          Send quotes with <br /> supplier <br /> preferences
        </>
      </PromotionCard>
    </>
  )
}

export default SignupSection