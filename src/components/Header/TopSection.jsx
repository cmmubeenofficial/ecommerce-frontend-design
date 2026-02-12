import ProfileSection from "./ProfileSection"
import { profileSectionData } from "./profileSectionData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

function TopSection() {

  return (
    <>
      <main className="conntainer flex justify-between items-center h-21.5 px-20">
        {/* logo */}
        <section className="logo-conatiner">
          <img src="/public/Brand/logo-colored.png" alt="brand logo" />
        </section>

        {/* search bar */}
        <form onSubmit={(e) => e.preventDefault()} className="search-bar-container h-10 w-166.25 flex justify-between border-2 border-[#0D6EFD] rounded-[7px]">
          <input type="search" name="cat-search" placeholder="Search" className="pl-3" />

          {/* dropdown and search button */}
          <div className="drop-btn relative flex justify-center border border-l-[#0D6EFD] border-r-0 border-y-0">
            <select name="cat-dropdown" className="pl-3 pr-12 appearance-none">
              <option value="All category">All category</option>
            </select>
            <span className="inter-events-none absolute left-27.5 top-1/2 -translate-y-1/2 text-[#8B96A5]">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>

            <button className="bg-linear-to-r from-[#127FFF] to-[#0067FF] text-white w-25 cursor-pointer">Search</button>
          </div>
        </form>

        {/* profile options */}
        <section className="profile-conatiner flex gap-[26.67px]">
          {profileSectionData.map((data) => (
            <ProfileSection key={data.id} icon={data.icon} bellowText={data.belowText} />
          ))}
        </section>
      </main>
    </>
  )
}

export default TopSection