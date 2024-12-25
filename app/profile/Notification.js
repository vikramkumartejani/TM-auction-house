'use client'

const Notification = () => {
    return (
        <div className='bg-[#111B1B] w-full lg:w-[300px] xl:w-[342px] p-6 rounded-2xl'>
            <h3 className='text-[#FFFFFF] text-[20px] leading-[36px] pb-3 border-b border-[#FFFFFF1A]'>Notification</h3>
            <div className='mt-4 bg-[#093033] rounded-xl px-4 pt-3.5 pb-2 flex items-center justify-between gap-2'>
                <h2 className='text-white text-[16px] leading-[28px] font-medium'>Show in Leaderboard</h2>
                <label className="switch">
                    <input type="checkbox" />
                        <span className="slider"></span>
                </label>
            </div>

            <div className='mt-6 border-b border-[#FFFFFF1A] pb-4 flex items-center justify-between gap-2'>
                <h2 className='text-[#FFFFFFCC] text-[16px] leading-[25px] font-centraRegular max-w-[223px]'>Get announcements from TMA Admins</h2>
                <label className="switch">
                    <input type="checkbox" />
                        <span className="slider"></span>
                </label>
            </div>

            <div className='mt-6 border-b border-[#FFFFFF1A] pb-4 flex items-center justify-between gap-2'>
                <h2 className='text-[#FFFFFFCC] text-[16px] leading-[25px] font-centraRegular max-w-[223px]'>Get an SMS alert each time new auction is posted</h2>
                <label className="switch">
                    <input type="checkbox" />
                        <span className="slider"></span>
                </label>
            </div>

            <div className='mt-6 flex items-center justify-between gap-2'>
                <h2 className='text-[#FFFFFFCC] text-[16px] leading-[25px] font-centraRegular max-w-[223px]'>Get notified 5 minutes before an auction you’re participating in ends</h2>
                <label className="switch">
                    <input type="checkbox" />
                        <span className="slider"></span>
                </label>
            </div>

        </div>
    )
}

export default Notification