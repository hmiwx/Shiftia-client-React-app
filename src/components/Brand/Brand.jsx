import React from 'react'
import Logo from '../../assets/images/logo.svg'

export default function Brand({w, h, fontsize}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-${h} w-${w} bg-white rounded-full overflow-hidden flex items-center justify-center`}>
        <img src={Logo} alt="Logo" className="w-[147%] h-[147%] object-cover" />
      </div>
      <h1 className={`text-${fontsize} font-bold`}>شیفتیا</h1>
    </div>
  )
}
