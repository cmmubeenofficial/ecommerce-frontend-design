import { useState } from 'react'
import ProfileSection from "./ProfileSection"
import { profileSectionData } from "./profileSectionData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons"
import MobileMenu from './MobileMenu'

function TopSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <main className="conntainer flex flex-col md:flex-row items-center gap-3 md:gap-0 h-auto md:h-21.5 px-3 sm:px-4 md:px-10 lg:px-20 py-3 md:py-0">
        {/* Top row: logo + mobile menu button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <section className="logo-conatiner">
            <img src="/Brand/logo-colored.png" alt="brand logo" className="h-8 md:h-auto" />
          </section>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2.5 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>

        {/* search bar */}
        <form onSubmit={(e) => e.preventDefault()} className="search-bar-container h-11 md:h-10 w-full md:w-166.25 flex justify-between border-2 border-[#0D6EFD] rounded-[7px]">
          <input type="search" name="cat-search" placeholder="Search" className="pl-3 text-sm md:text-base flex-1 min-w-0" />

          {/* dropdown and search button */}
          <div className="drop-btn relative flex justify-center border border-l-[#0D6EFD] border-r-0 border-y-0">
            <select name="cat-dropdown" className="pl-2 md:pl-3 pr-10 md:pr-12 appearance-none hidden sm:block text-sm">
              <option value="All category">All category</option>
            </select>
            <span className="inter-events-none absolute left-27.5 top-1/2 -translate-y-1/2 text-[#8B96A5] hidden sm:block">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>

            <button className="bg-linear-to-r from-[#127FFF] to-[#0067FF] text-white w-full sm:w-20 md:w-25 cursor-pointer text-sm md:text-base h-full font-medium">Search</button>
          </div>
        </form>

        {/* profile options */}
        <section className="profile-conatiner hidden md:flex gap-[26.67px]">
          {profileSectionData.map((data) => (
            <ProfileSection key={data.id} icon={data.icon} bellowText={data.belowText} />
          ))}
        </section>
      </main>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}

export default TopSection