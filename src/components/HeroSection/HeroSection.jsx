import NavLinks from './NavLinks'
import SignupSection from './Signup/SignupSection'

function HeroSection() {
    return (
        // 
        <div className='flex flex-col items-center py-3.75'>
            <div className="hero-container flex justify-center gap-3.75 w-295 border border-[#DEE2E7] rounded-md bg-white py-3.75">

                {/* links bar */}
                <div className="links-bar w-60 h-90">
                    <NavLinks />
                </div>

                {/* banner image */}
                <div className="banner-img w-166.25 h-90 bg-[url('./Image/backgrounds/hero-banner.png')] bg-cover bg-center bg-no-repeat bg-blue-300 pt-16.25 pl-12.25">
                    <h2 className='text-[28px]'>Latest trending</h2>
                    <h2 className='text-[32px] font-bold'>Electronic items</h2>
                    <div className="btn-container pt-4">
                        <button className='font-medium bg-[#FFFFFF] h-10 w-29.75 rounded-md'><a href="/">Learn more</a></button>
                    </div>
                </div>

                {/* signup */}
                <div className="signup flex flex-col gap-2.25">
                    <SignupSection />
                </div>
            </div>
        </div>
    )
}

export default HeroSection