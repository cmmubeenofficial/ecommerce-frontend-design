import SigninUpBtn from "./SigninUpBtn"

function SignupCard() {
  return (
    <div className='card-conatiner bg-[#E3F0FF] w-50 h-37.5 rounded-md flex flex-col justify-center items-center gap-3'>

      {/* user icon + message */}
      <div className="icon-and-message flex items-center gap-5">
        <div className="user-icon h-11 w-11 bg-[#C6E2FF] flex items-end justify-center rounded-full">
          <img src="/public/icons/user-icon.svg" alt="user profile icon" />
        </div>
        <h3>Hi, user <br />let’s get stated</h3>
      </div>

      {/* signin + signup button */}
      <div className="signin-up-btn flex flex-col gap-2.25">
        <SigninUpBtn label={"Join now"} bg={"bg-linear-to-r from-[#127FFF] to-[#0067FF]"} textColor={"text-[#FFFFFF]"} />
        <SigninUpBtn label={"Log in"} bg={"bg-[#FFFFFF]"} textColor={"text-[#0D6EFD]"} border="border border-[#DEE2E7]" />
      </div>
    </div>
  )
}

export default SignupCard