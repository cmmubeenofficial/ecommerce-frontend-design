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
      <footer className='footer-container flex justify-between items-center px-20 h-64'>

        {/* brand + social links container */}
        <section className="brand-social-container flex flex-col gap-4 w-69">

          {/* Brand Container */}
          <div className="brand-container">
            <img src="/Brand/logo-colored.png" alt="brand logo" />
          </div>

          {/* Text Container */}
          <p className='text-[#505050]'>Best information about the company gies here but now lorem ipsum is</p>

          {/* social links container */}
          <div className="social-links flex items-center gap-2.5">
            {socialIconsData.map((sociaData) => (
              <SocialIcons key={sociaData.id} icon={sociaData.icon} />
            ))}
          </div>
        </section>

        {/* nav links */}
        <section className="nav-links flex gap-28">
          {navLinksData.map((data) => (
            <NavLinks key={data.id} heading={data.heading} subLinks={data.subLinks} />
          ))}

          {/* <NavLinks /> */}
        </section>

        {/* mobile apps */}
        <section className="app-links flex flex-col gap-3 -mt-2.75">
          <h1 className="font-medium">Get app</h1>
          <button>
            <a href="/"> <img src="/public/app/app_store.png" alt="app download button" /></a>
          </button>
          <button>
            <a href="/"><img src="/public/app/android.png" alt="app download button" /></a>
          </button>
        </section>
      </footer>

      {/* copywrite and language */}
      <section className="copywrite border border-[#DEE2E7] bg-[#EFF2F4] h-17 flex items-center justify-between px-20">
        <p className='text-[#606060]'>© 2023 Ecommerce.</p>
        <button className='flex items-center gap-1.5 cursor-pointer text-[#606060]'>
          <img src="/public/flags/US@2x.png" alt="English" />
          English
          <FontAwesomeIcon icon={faChevronUp} size='sm' className='text-black' />
        </button>
      </section>
    </>
  )
}

export default Footer