'use client'

import { useState } from 'react'

const Notification = () => {
    const [enabled, setEnabled] = useState(false)

  return (
    <div className='bg-[#111B1B] w-[342px] p-6 rounded-2xl'>
        <h3 className='text-[#FFFFFF] text-[20px] leading-[36px] pb-1.5 border-b border-[#FFFFFF1A]'>Notification</h3>
        <div className='mt-4 bg-[#093033] rounded-xl px-4 pt-3.5 pb-2'>
            <h2 className='text-white text-[16px] leading-[28px] font-medium'>Show in Leaderboard</h2>
 <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => setEnabled(!enabled)}
        className={`
          relative inline-flex h-14 w-24 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 
          focus-visible:ring-white focus-visible:ring-opacity-75
          ${enabled ? 'bg-lime-400' : 'bg-slate-400'}
        `}
      >
        <span className="sr-only">Toggle switch</span>
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block h-12 w-12 transform rounded-full 
            bg-white shadow-lg ring-0 transition duration-200 ease-in-out
            ${enabled ? 'translate-x-10' : 'translate-x-0'}
          `}
        />
      </button>
 <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => setEnabled(!enabled)}
        className={`
          relative inline-flex h-14 w-24 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 
          focus-visible:ring-white focus-visible:ring-opacity-75
          ${enabled ? 'bg-lime-400' : 'bg-slate-400'}
        `}
      >
        <span className="sr-only">Toggle switch</span>
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block h-12 w-12 transform rounded-full 
            bg-white shadow-lg ring-0 transition duration-200 ease-in-out
            ${enabled ? 'translate-x-10' : 'translate-x-0'}
          `}
        />
      </button>
        </div>
    </div>
  )
}

export default Notification