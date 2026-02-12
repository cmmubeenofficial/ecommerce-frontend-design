import React from 'react'

function ProfileSection({ icon, bellowText }) {
  return (
    <button className="flex flex-col justify-center items-center gap-2 cursor-pointer">
      <img src={`icons/${icon}.svg`} alt={`${icon} button`} />
      <span>{bellowText}</span>
    </button>
  )
}

export default ProfileSection