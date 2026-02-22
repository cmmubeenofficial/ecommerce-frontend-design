function SigninUpBtn({ label, bg, textColor, border = "border-none" }) {
    return (
        <button className={`${bg} ${textColor} ${border} h-7.5 w-45 rounded-md text-[13px] font-medium cursor-pointer`}><a href="/">{label}</a></button>
    )
}

export default SigninUpBtn