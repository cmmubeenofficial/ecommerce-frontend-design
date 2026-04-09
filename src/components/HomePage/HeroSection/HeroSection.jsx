import NavLinks from './NavLinks'
import SignupSection from './Signup/SignupSection'

function HeroSection() {
    return (
        <div className="hero-container flex flex-col md:flex-row justify-center gap-4 md:gap-3.75 w-full max-w-7xl mx-auto border border-[#DEE2E7] rounded-md bg-white py-4 md:py-3.75">

            {/* links bar - hidden on mobile */}
            <div className="links-bar hidden md:block w-full md:w-60 h-auto md:h-90">
                <NavLinks />
            </div>

            {/* banner image */}
            <div className="banner-img w-full h-48 md:h-60 lg:h-90 bg-[url('/image/backgrounds/hero-banner.png')] bg-cover bg-center bg-no-repeat pt-8 md:pt-16.25 pl-4 md:pl-12.25">
                <h2 className='text-xl md:text-[28px]'>Latest trending</h2>
                <h2 className='text-2xl md:text-[32px] font-bold'>Electronic items</h2>
                <div className="btn-container pt-4">
                    <button className='font-medium bg-[#FFFFFF] h-10 w-24 md:w-29.75 rounded-md'><a href="/">Learn more</a></button>
                </div>
            </div>

            {/* signup */}
            <div className="signup flex flex-col gap-2.25">
                <SignupSection />
            </div>
        </div>
    )
}

export default HeroSection