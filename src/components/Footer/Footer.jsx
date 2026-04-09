import { socialIconsData } from './socialIconsData'
import SocialIcons from './SocialIcons'
import { navLinksData } from './navLinksData'
import NavLinks from './NavLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Newsletter from './Newsletter/Newsletter'


function Footer() {
  return (
    <>

      {/* newsletter */}
      <Newsletter />

      {/* footer container */}
      <footer className='footer-container flex flex-col md:flex-row justify-between items-start px-4 md:px-10 lg:px-20 h-auto md:h-64 py-8 md:py-0 gap-8 md:gap-0'>

        {/* brand + social links container */}
        <section className="brand-social-container flex flex-col gap-4 w-full md:w-69">

          {/* Brand Container */}
          <div className="brand-container">
            <img src="/Brand/logo-colored.png" alt="brand logo" className="h-8 md:h-auto" />
          </div>

          {/* Text Container */}
          <p className='text-[#505050] text-sm md:text-base'>Best information about the company gies here but now lorem ipsum is</p>

          {/* social links container */}
          <div className="social-links flex items-center gap-2.5">
            {socialIconsData.map((sociaData) => (
              <SocialIcons key={sociaData.id} icon={sociaData.icon} />
            ))}
          </div>
        </section>

        {/* nav links */}
        <section className="nav-links grid grid-cols-2 md:flex gap-6 md:gap-28">
          {navLinksData.map((data) => (
            <NavLinks key={data.id} heading={data.heading} subLinks={data.subLinks} />
          ))}

          {/* <NavLinks /> */}
        </section>

        {/* mobile apps */}
        <section className="app-links flex flex-col gap-3 -mt-2.75 w-full md:w-auto">
          <h1 className="font-medium">Get app</h1>
          <div className="flex gap-3">
            <button>
              <a href="/"> <img src="/app/app_store.png" alt="app download button" className="h-10 md:h-auto" /></a>
            </button>
            <button>
              <a href="/"><img src="/app/android.png" alt="app download button" className="h-10 md:h-auto" /></a>
            </button>
          </div>
        </section>
      </footer>

      {/* copywrite and language */}
      <section className="copywrite border border-[#DEE2E7] bg-[#EFF2F4] h-auto md:h-17 flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-4 md:py-0 gap-4 md:gap-0">
        <p className='text-[#606060] text-sm'>© 2023 Ecommerce.</p>
        <button className='flex items-center gap-1.5 cursor-pointer text-[#606060] text-sm'>
          <img src="/flags/US@2x.png" alt="English" className="w-4 h-4" />
          English
          <FontAwesomeIcon icon={faChevronUp} size='sm' className='text-black' />
        </button>
      </section>
    </>
  )
}

export default Footer