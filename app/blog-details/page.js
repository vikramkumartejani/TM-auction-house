import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import DashboardNavbar from '../components/DashboardNavbar';


const page = () => {
    return (
        <DashboardLayout>
            <div className='md:hidden block'>
                <DashboardNavbar/>
            </div>
            <div className='max-w-[1270px] mx-auto w-full'>
                <div className='flex items-center gap-2 md:border-b border-[#FFFFFF1A] md:pb-6'>
                    <Link href='/blog' className='text-[#FFFFFF80] text-[16px] font-centraRegular pt-1'>Blog</Link>
                    <IoIosArrowForward size={18} className='text-[#FFFFFF80]' />
                    <h3 className='text-[#FFFFFF] text-[16px] font-centraRegular pt-1.5'>Details</h3>
                </div>

                <h3 className='mt-6 text-white text-[16px] leading-[22px]'>6th Nov, 2024</h3>
                <h2 className='mt-6 text-[#FFFFFF] text-[32px] leading-[44px] max-w-[1100px]'>Weekly Wind Down | Sales Highlights including watches from Patek Philippe, Rolex & A. Lange & Söhne</h2>
                <div className='mt-6 md:w-fit w-full justify-between flex items-center gap-6'>
                    <h3 className='text-[#79A09F] text-[16px] leading-[22px] pt-1'>by Nick Bennett</h3>
                    <div className='bg-[#093033] w-[125px] h-[42px] rounded-[164px] flex items-center gap-2.5 pl-1'>
                        <Image src='/assets/eyes.svg' alt='eyes' width={32} height={32} />
                        <span className='text-white text-[14px] font-centraRegular pt-[5px]'>412 Views</span>
                    </div>
                </div>

                <div className='mt-6 md:mt-9 max-w-[1274px]'>
                    <h3 className='text-white text-[24px] leading-[24px] font-medium'>2024 Patek Philippe Cubitus</h3>
                    <p className='mt-4 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>The big news this week was the world’s first public auction of Patek’s new Cubitus model and it happened right here at Watch Collecting. Listing on the site just days after the watch’s official release, it achieved a hammer price of £81,000, marking a 54% increase over the retail price.</p>
                    <p className='mt-2 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>This is a strong result for any watch, but particularly interesting for the Cubtius, which was met with plenty of criticism for its striking similarities to the Nautilus, and its rather beefy dimensions. Despite these grievances, it’s clear that there’s plenty of demand for this angular sports watch, evidenced by this auction result. </p>
                    <p className='mt-2 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>It remains to be seen if the Cubitus will continue to attract these prices on the secondary market. But it raises the question: has the watch community been too quick to judge Patek’s first new model line in 25 years, or is this just launch hype?  <span className='font-medium text-white'>Recently sold on Watch Collecting for £81,000</span></p>
                    <div className='mt-4 md:mt-10 flex items-center gap-2 md:gap-7 '>
                        <div>
                            <img src='/assets/watch-two.svg' alt='watch' className='w-full flex-1' />
                        </div>
                        <div>
                            <img src='/assets/watch-three.svg' alt='watch' className='w-full flex-1' />
                        </div>
                    </div>

                    <h3 className='mt-6 md:mt-10 text-white text-[24px] leading-[24px] font-medium'>2024 Rolex Yacht-Master 42</h3>
                    <p className='mt-4 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>The lightweight and anti-corrosive properties of titanium have been widely used in watchmaking for years. It’s the ideal material for a sports watch, being around 40% lighter than steel and highly resistant to corrosion. Surprisingly, the world’s most recognized watch brand, known for durable sports models, had never ventured into titanium—until now!</p>
                    <p className='mt-4 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>This Yacht-Master 42 isn’t actually Rolex’s first regular production titanium watch—that honor goes to the 50mm Deepsea Challenge. However, with its 26,000 ft water resistance and large dimensions, the Yachty is the first with wrist-friendly sizing.</p>
                    <p className='mt-4 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>Even more curious is Rolex’s choice of the Yacht-Master to introduce titanium, as this line was originally introduced as an upscale alternative to the Submariner. The result is a model that brings real tool-watch credibility to the line with its all-brushed finish and monochromatic aesthetic.</p>
                    <p className='mt-4 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>The Yacht-Master in titanium suits anyone after a Rolex sports watch with a bit of rugged charm, something not seen in the professional range for years. <b className='text-white font-medium'> Recently sold on Watch Collecting for £17,000</b></p>

                    <div className='my-5 md:my-10'>
                        <img src='/assets/watch-four.svg' alt='watch' className='w-full' />
                    </div>

                    <h3 className='mt-7 md:mt-10 text-white text-[24px] leading-[24px] font-medium'>2022 A. Lange & Söhne 1815 Chronograph</h3>
                    <p className='mt-4 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>The lightweight and anti-corrosive properties of titanium have been widely used in watchmaking for years. It’s the ideal material for a sports watch, being around 40% lighter than steel and highly resistant to corrosion. Surprisingly, the world’s most recognized watch brand, known for durable sports models, had never ventured into titanium—until now!</p>
                    <p className='mt-4 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>This Yacht-Master 42 isn’t actually Rolex’s first regular production titanium watch—that honor goes to the 50mm Deepsea Challenge. However, with its 26,000 ft water resistance and large dimensions, the Yachty is the first with wrist-friendly sizing.</p>
                    <p className='mt-4 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>Even more curious is Rolex’s choice of the Yacht-Master to introduce titanium, as this line was originally introduced as an upscale alternative to the Submariner. The result is a model that brings real tool-watch credibility to the line with its all-brushed finish and monochromatic aesthetic.</p>
                    <p className='mt-4 md:mt-6 text-[#FFFFFFCC] text-[14px] leading-[21px] font-centraRegular'>The Yacht-Master in titanium suits anyone after a Rolex sports watch with a bit of rugged charm, something not seen in the professional range for years. <b className='text-white font-medium'> Recently sold on Watch Collecting for £17,000</b></p>

                    <div className='mt-4 md:my-10'>
                        <img src='/assets/watch-five.svg' alt='watch' className='w-full' />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default page