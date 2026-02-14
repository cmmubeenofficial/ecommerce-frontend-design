import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

function ManuSection() {
  return (
    <main className="border border-[#E0E0E0] w-full px-20 flex items-center justify-between">
      {/* manu links */}
      <section className="manu-links flex items-center h-14 ">

        <div className="bars-container pr-1 cursor-pointer">
          <FontAwesomeIcon icon={faBars} size='lg' />
        </div>

        <ul className='text-[16px] flex gap-10 items-center w-155 relative'>
          <li className='cursor-pointer'>All category</li>
          <li className='cursor-pointer'>Hot offers</li>
          <li className='cursor-pointer'>Gift boxes</li>
          <li className='cursor-pointer'>Projects</li>
          <li className='cursor-pointer'>Menu item</li>
          <li className='cursor-pointer'>Help</li>
          <div className="arrow-container absolute left-[97%] text-[#8B96A5] cursor-pointer">
            <FontAwesomeIcon icon={faChevronDown} size='sm' />
          </div>
        </ul>
      </section>

      {/* dropdown for language and country */}
      <section className="lang-country-container flex gap-12 relative">
        <select name="lang-dropdown" className='appearance-none cursor-pointer'>
          <option value="English, USD">English, USD</option>
        </select>
        <span className="down-arrow text-[#8B96A5] absolute left-[45%] cursor-pointer">
          <FontAwesomeIcon icon={faChevronDown} size='xs' />
        </span>

        <button class="flex items-center gap-2 cursor-pointer">
          Ship to
          <img src="/flags/DE@2x.png" alt="Germany" class="w-4 h-4" />
        </button>
        <span className="down-arrow text-[#8B96A5] absolute left-[104%] cursor-pointer">
          <FontAwesomeIcon icon={faChevronDown} size='xs' />
        </span>
      </section>
    </main>
  )
}

export default ManuSection