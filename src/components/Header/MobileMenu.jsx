import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import ProfileSection from './ProfileSection'
import { profileSectionData } from './profileSectionData'

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#DEE2E7]">
          <img src="/Brand/logo-colored.png" alt="brand logo" className="h-8" />
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-3">
            <li className="py-2 px-3 hover:bg-gray-50 rounded cursor-pointer text-[16px]">All category</li>
            <li className="py-2 px-3 hover:bg-gray-50 rounded cursor-pointer text-[16px]">Hot offers</li>
            <li className="py-2 px-3 hover:bg-gray-50 rounded cursor-pointer text-[16px]">Gift boxes</li>
            <li className="py-2 px-3 hover:bg-gray-50 rounded cursor-pointer text-[16px]">Projects</li>
            <li className="py-2 px-3 hover:bg-gray-50 rounded cursor-pointer text-[16px]">Menu item</li>
            <li className="py-2 px-3 hover:bg-gray-50 rounded cursor-pointer text-[16px]">Help</li>
          </ul>
        </nav>

        {/* Profile Options */}
        <div className="border-t border-[#DEE2E7] p-4">
          <div className="grid grid-cols-4 gap-2">
            {profileSectionData.map((data) => (
              <ProfileSection 
                key={data.id} 
                icon={data.icon} 
                bellowText={data.belowText} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
