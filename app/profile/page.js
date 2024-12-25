'use client'
import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import BottomBar from '../components/BottomBar'
import Products from './Products'
import Notification from './Notification'
import YourComments from './YourComments'

const page = () => {
  const [activeTab, setActiveTab] = useState('Winning Bid');

  const tabs = [
    { label: 'Winning Bid', id: 'winningBid' },
    { label: 'Current Bid', id: 'currentBid' },
    { label: 'Pending Bid', id: 'pendingBid' },
    { label: 'Saved', id: 'saved' },
  ];
  return (
    <DashboardLayout>
      <div className='w-full flex items-start lg:flex-row flex-col gap-6'>
        <div className='w-full max-w-[904px]'>
          <div className='bg-[#111B1B] w-full rounded-t-[16px]'>
            <div className='relative'>
              <img src='/assets/profile-banner.png' alt='profile-banner' className='w-full rounded-t-[16px] h-[115px] md:max-h-[211px]' />
              {/* Profile Banner update */}
              <button className='absolute top-3 right-3 bg-[#00000066] flex items-center gap-1.5 pt-1 justify-center rounded-3xl h-[37px] w-[160px] sm:w-[192px] text-white text-xs sm:text-[14px] sm:leading-[25px]' style={{ backdropFilter: "blur(40px)" }}>
                <img src='/assets/camera.svg' alt='camera' width={24} height={24} className='mt-[-5px] sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]' />
                Change Cover Photo
              </button>
            </div>

            <div className='px-3 sm:px-6 flex items-start justify-between gap-2'>
              <div className='-mt-8 sm:-mt-16'>
                <div className='relative w-[56px] sm:w-[124px] h-[56px] sm:h-[124px]'>
                  <img src='/assets/profile-pic.png' alt='profile-pic' width={124} height={124} />
                  <img src='/assets/profile-tag.svg' alt='profile-tag' width={44} height={44} className='sm:w-[44px] sm:h-[44px] w-[24px] h-[24px] absolute bottom-0 right-0' />
                </div>
                <h2 className='sm:mt-0 mt-2 text-[#FFFFFF] text-[18px] sm:text-[32px] sm:leading-[70px]'>Charles Patterson</h2>
                <h3 className='text-[#79A09F] text-xs sm:text-[18px] leading-[22px] font-centraRegular'><span className='text-[#CBAD7E]'>(Gold)</span> Member since 10/31/2024</h3>
                {/* Tabs */}
                <div className='mt-[34px] flex items-center gap-8 w-full'>
                  {/* {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.label)}
                      className={`text-[18px] leading-[32px] border-b-2 pb-2 ${activeTab === tab.label
                        ? 'text-[#CBAD7E] font-medium  border-[#CBAD7E]'
                        : 'text-[#FFFFFF] font-centraRegular border-transparent'
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))} */}
                </div>
              </div>

              <button className='mt-8 bg-[#093033] rounded-3xl pt-1 text-[#FFFFFF] text-[14px] sm:text-[18px] font-centraRegular flex items-center justify-center gap-1.5 h-[35px] sm:h-[44px] w-[130px] sm:w-[184px]'>
                <img src='/assets/setting.svg' alt='setting' width={24} height={24} className='mt-[-5px] sm:w-[24px] md:h-[24px] w-5 h-5' />
                Profile setting
              </button>
            </div>
          </div>
          <Products/>
        </div>

        <div className='w-full flex flex-col gap-6 text-white'>
          <Notification/>
          <YourComments/>
        </div>
      </div>
      <BottomBar />
    </DashboardLayout>
  )
}

export default page