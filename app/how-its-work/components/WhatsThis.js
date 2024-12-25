import Image from 'next/image';
import React from 'react'

const WhatsThis = () => {
    const features = [
        {
            icon: '/assets/tm-auction-house.svg',
            title: "TM Auction House",
            description:
                "We will now run our super RAW and REAL auctions on here, our very own TM Auction House.",
        },
        {
            icon: "/assets/player-focused-platform.svg",
            title: "Player-Focused Platform",
            description:
                "This will cater exactly to what we need as players, no limitations from WhatsApp.",
        },
        {
            icon: "/assets/live-interaction.svg",
            title: "Live Interaction",
            description:
                "We will now run our super RAW and REAL auctions on here, our very own TM Auction House.",
        },
        {
            icon: "/assets/past-auction-access.svg",
            title: "Past Auction Access",
            description: "You can see past auctions, search through etc. 🙂",
        },
    ];

    return (
        <div className="mt-7 md:mt-12">
            <div className="text-[#FFE9C2]">
                <h1 className="max-w-[1062px] text-[28px] md:text-[42px] md:leading-[50px] font-medium uppercase">How Welcome to the new faces, nice to see the <span className="font-CentraNo2Light uppercase italic">old players from the WhatsApp groups.</span></h1>
            </div>

            <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 md:gap-5 bg-[#091618] p-4 md:p-11"
                    >
                        <Image src={feature.icon} alt={feature.title} width={56} height={56} className='md:w-[56px] md:h-[56px] w-[32px] h-[32px]' />
                        <div className='mt-[4px] md:mt-[13px]'>
                            <h3 className="text-[22px] md:text-[32px] md:leading-[41px] font-medium text-[#CBAD7E]">{feature.title}</h3>
                            <p className="mt-2 md:mt-4 text-[#FFFFFF] text-[16px] md:text-[20px] md:leading-[28px] font-centraRegular">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-left text-[#FFFFFFCC] text-[16px] md:text-[24px] font-centraRegular md:leading-[32px] mt-5 md:mt-10 max-w-[925px]">
                All real vetted players who have to go through the verification process
                manually with us. Let’s try some things, valuing transparency and honesty, no smoke & mirrors, no shortcuts.
            </p>
        </div>
    )
}

export default WhatsThis