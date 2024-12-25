'use client';
import { useEffect, useState } from 'react';

export default function ProfileModal({ isOpen, onClose }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };


    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!isOpen) return null;
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 z-40" onClick={onClose} />
            <div>
                <div className="overflow-y-auto absolute lg:fixed left-1/2 top-20 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-[95%] max-w-[1029px] bg-[#093033] rounded-lg py-14 px-4 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative min-w-[113px] min-h-[113px] rounded-full bg-[#F5EFE6] flex items-center justify-center mb-2 shadow-md">
                            {selectedImage ? (
                                <img
                                    src={selectedImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                </div>
                            )}

                            <label
                                htmlFor="imageUpload"
                                className="absolute -bottom-0 -right-1 w-11 h-11 flex items-center justify-center cursor-pointer"
                            >
                                <img src="/assets/upload-pic.svg" alt="Upload" className="w-11 h-11" />
                            </label>

                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </div>

                        <p className="text-white text-[24px] md:text-[32px]">Upload a photo</p>
                        <p className="text-[#79A09F] text-[16px] font-centraRegular">Minimum size 50 MB</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5 max-w-[839px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-white/60 text-[16px] md:text-[18px] font-centraRegular mb-1.5">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Charles"
                                    className="w-full px-4 pt-1.5 h-[57px] rounded-lg text-[18px] font-medium bg-[#F7F1E7] text-[#093033] border border-[#F7F1E73D] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-white/60 text-[16px] md:text-[18px] font-centraRegular mb-1.5">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Charles"
                                    className="w-full px-4 pt-1.5 h-[57px] rounded-lg text-[18px] font-medium bg-[#F7F1E7] text-[#093033] border border-[#F7F1E73D] outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-white/60 text-[16px] md:text-[18px] font-centraRegular mb-1.5">Email</label>
                                <input
                                    type="email"
                                    placeholder="alvie.wahed157"
                                    className="w-full px-4 pt-1.5 h-[57px] rounded-lg text-[18px] font-medium bg-[#F7F1E7] text-[#093033] border border-[#F7F1E73D] outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-white/60 text-[16px] md:text-[18px] font-centraRegular mb-1.5">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="(209) 555-0104"
                                    className="w-full px-4 pt-1.5 h-[57px] rounded-lg text-[18px] font-medium bg-[#F7F1E7] text-[#093033] border border-[#F7F1E73D] outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-white/60 text-[16px] md:text-[18px] font-centraRegular mb-1.5">Input Password</label>
                                <input
                                    type="password"
                                    placeholder="Charles"
                                    className="w-full px-4 pt-1.5 h-[57px] rounded-lg text-[18px] font-medium bg-[#F7F1E7] text-[#093033] border border-[#F7F1E73D] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-white/60 text-[16px] md:text-[18px] font-centraRegular mb-1.5">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Charles"
                                    className="w-full px-4 pt-1.5 h-[57px] rounded-lg text-[18px] font-medium bg-[#F7F1E7] text-[#093033] border border-[#F7F1E73D] outline-none"
                                />
                            </div>
                        </div>
                    </form>
                    <div className="max-w-[839px] mx-auto w-full mt-10">
                        <button
                            onClick={onClose}
                            type="submit"
                            style={{ background: "linear-gradient(237.24deg, #87603F 15.61%, #FFF3CF 114.56%)" }}
                            className="w-full h-[64px] text-[20px] pt-1.5 rounded-[56px] bg-[#B69D74] text-white"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
