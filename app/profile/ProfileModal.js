'use client'

import { useEffect } from 'react'

export default function ProfileModal({ isOpen, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [onClose])

    if (!isOpen) return null

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 z-40" onClick={onClose} />
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1029px] bg-[#093033] rounded-lg py-14 px-4 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
                
                <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-2">
                        <img
                            src="/assets/camera.svg"
                            alt="Upload"
                            className="w-8 h-8 opacity-50"
                        />
                    </div>
                    <p className="text-white text-[32px]">Upload a photo</p>
                    <p className="text-[#79A09F] text-[16px] font-centraRegular">Minimum size 50 MB</p>
                </div>

                {/* Form */}
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-[839px] mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-white/60 text-sm mb-1">First Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                            />
                        </div>
                        <div>
                            <label className="block text-white/60 text-sm mb-1">Last Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-white/60 text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                        />
                    </div>

                    <div>
                        <label className="block text-white/60 text-sm mb-1">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-white/60 text-sm mb-1">Input Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                            />
                        </div>
                        <div>
                            <label className="block text-white/60 text-sm mb-1">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
                            />
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        type="submit"
                        className="w-full py-3 rounded-lg bg-[#B69D74] text-white font-medium hover:bg-[#a08a65] transition-colors mt-6"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </>
    )
}

