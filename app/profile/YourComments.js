'use client'

const YourComments = () => {
    return (
        <div className='bg-[#111B1B] w-full lg:w-[300px] xl:w-[342px] p-6 rounded-2xl'>
            <div className="pb-1 flex items-center justify-between gap-2 w-full border-b border-[#FFFFFF1A]">
                <h3 className='text-[#FFFFFF] text-[20px] leading-[36px] pb-1.5'>Your Comments</h3>
                <h3 className="text-[#FFFFFFB2] text-[14px] leading-[16px] font-centraRegular">View all</h3>
            </div>

            <div className='mt-6 border-b border-[#FFFFFF1A] pb-4 gap-2'>
                <h2 className='text-white text-[16px] leading-[25px] font-centraRegular'>Shipping is available (£100-£120)</h2>
                <h4 className="mt-2 text-[#FFFFFFB2] text-[14px] leading-[22px] font-centraRegular">Today, 12:30 PM</h4>
            </div>

            <div className='mt-6 border-b border-[#FFFFFF1A] pb-4 gap-2'>
                <h2 className='text-white text-[16px] leading-[25px] font-centraRegular'>The warranty card is available.</h2>
                <h4 className="mt-2 text-[#FFFFFFB2] text-[14px] leading-[22px] font-centraRegular">Today, 12:30 PM</h4>
            </div>

            <div className='mt-6 border-b border-[#FFFFFF1A] pb-4 gap-2'>
                <h2 className='text-white text-[16px] leading-[25px] font-centraRegular'>Hi, do you have the original IWC international warranty card </h2>
                <h4 className="mt-2 text-[#FFFFFFB2] text-[14px] leading-[22px] font-centraRegular">Today, 12:30 PM</h4>
            </div>

            <div className='mt-6 gap-2'>
                <h2 className='text-white text-[16px] leading-[25px] font-centraRegular'>Any idea on shipping cost to the UK..? </h2>
                <h4 className="mt-2 text-[#FFFFFFB2] text-[14px] leading-[22px] font-centraRegular">Today, 12:30 PM</h4>
            </div>
        </div>
    )
}

export default YourComments