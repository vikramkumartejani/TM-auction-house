'use client'
import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Image from 'next/image';
import LatestNews from './LatestNews';
import Link from 'next/link';

const page = () => {
    const [activeTab, setActiveTab] = useState('All Articles');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <DashboardLayout>
            <div className=''>
                <div>
                    <h1 className='text-white text-[32px]'>Watch Auction Blog</h1>
                    <h4 className='text-[#CBAD7E] text-[16px] leading-[22px] font-centraRegular'>Your guide to the allure and excitement of luxury watch auctions</h4>
                </div>
                
                <div className="mt-5 md:mt-7 flex items-center flex-wrap gap-1">
                    <button
                        className={`flex-grow sm:flex-grow-0 px-4 pt-1.5 h-[40px] md:h-[48px] text-[12px] md:text-[14px] font-medium md:leading-[18px] rounded-[24px] ${activeTab === 'All Articles' ? 'bg-[#FFE9C2] text-[#0B0A0A]' : 'bg-[#093033] text-white'
                            }`}
                        onClick={() => handleTabClick('All Articles')}
                    >
                        All Articles
                    </button>
                    <button
                        className={`flex-grow sm:flex-grow-0 px-4 pt-1.5 h-[40px] md:h-[48px] text-[12px] md:text-[14px] font-medium md:leading-[18px] rounded-[24px] ${activeTab === 'Opinions' ? 'bg-[#FFE9C2] text-[#0B0A0A]' : 'bg-[#093033] text-white'
                            }`}
                        onClick={() => handleTabClick('Opinions')}
                    >
                        Opinions
                    </button>
                    <button
                        className={`flex-grow sm:flex-grow-0 px-4 pt-1.5 h-[40px] md:h-[48px] text-[12px] md:text-[14px] font-medium md:leading-[18px] rounded-[24px] ${activeTab === 'Weekly Wind Down' ? 'bg-[#FFE9C2] text-[#0B0A0A]' : 'bg-[#093033] text-white'
                            }`}
                        onClick={() => handleTabClick('Weekly Wind Down')}
                    >
                        Weekly Wind Down
                    </button>
                    <button
                        className={`flex-grow  sm:flex-grow-0 px-4 pt-1.5 h-[40px] md:h-[48px] text-[12px] md:text-[14px] font-medium md:leading-[18px] rounded-[24px] ${activeTab === 'How to Guides' ? 'bg-[#FFE9C2] text-[#0B0A0A]' : 'bg-[#093033] text-white'
                            }`}
                        onClick={() => handleTabClick('How to Guides')}
                    >
                        How to Guides
                    </button>
                </div>

                <div className='mt-4 md:mt-10 flex items-center lg:flex-row flex-col gap-5 lg:gap-10'>
                    <Link href='/blog-details' className='w-full lg:w-fit relative'>
                        <Image src='/assets/blog.svg' alt='blog' width={486} height={313} />
                        <div className='absolute top-2 left-2 bg-[#093033] w-[91px] sm:w-[125px] h-[32px] sm:h-[42px] rounded-[164px] lg:hidden flex items-center gap-1.5 sm:gap-2.5 pl-1'>
                            <Image src='/assets/eyes.svg' alt='eyes' width={32} height={32} className='sm:min-w-[32px] sm:min-h-[32px] h-[24px] w-[24px]' />
                            <span className='text-white text-[10px] sm:text-[14px] font-centraRegular pt-[5px]'>412 Views</span>
                        </div>
                    </Link>
                    <div className=''>
                        <h3 className='text-[#79A09F] text-xs md:text-[16px] md:leading-[22px]'>6 Nov, 2024</h3>
                        <p className='text-white mt-4 lg:mt-8 text-[20px] md:text-[32px] md:leading-[44.8px] font-medium lg:max-w-[748px]'>Weekly Wind Down | Sales Highlights including watches from Patek Philippe, Rolex & A. Lange & Söhne</p>
                        <p className='mt-2 lg:mt-4 text-[#FFFFFFCC] text-sm md:text-[16px] md:leading-[22px] font-centraRegular'>We just sold the first Cubitus at public auction, and the result will surprise you!</p>
                        <div className='mt-8 bg-[#093033] w-[125px] h-[42px] rounded-[164px] hidden lg:flex items-center gap-2.5 pl-1'>
                            <Image src='/assets/eyes.svg' alt='eyes' width={32} height={32} />
                            <span className='text-white text-[14px] font-centraRegular pt-[5px]'>412 Views</span>
                        </div>
                    </div>
                </div>

                <LatestNews />
            </div>
        </DashboardLayout>
    )
}

export default page