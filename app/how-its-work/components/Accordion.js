'use client'
import Image from "next/image";
import { useState } from "react";

const Accordion = () => {
    const [openItem, setOpenItem] = useState(null);

    const items = [
        {
            id: "shipping",
            title: "Shipping Information",
            content:
                "Winners in the US need to provide a label or pay for one. Shipping to Europe, Middle East and Asia is available too.",
        },
        { id: "payment", title: "Payment Terms", content: "Details on payment." },
        { id: "bidding", title: "Real-Time Bidding", content: "Bidding information." },
        { id: "autoBid", title: "Auto Bid Functionality", content: "Auto-bid details." },
        { id: "auctionAccess", title: "Auction Access", content: "Access process." },
        {
            id: "postAuction",
            title: "Post-Auction Process",
            content: "Details about the post-auction process.",
        },
    ];

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className="mt-7 md:mt-12">
            <div className="text-[#FFE9C2]">
                <h1 className="text-[28px] md:text-[42px] md:leading-[50px] font-bold uppercase">How TMA FUN work</h1>
                <h4 className="text-[28px] md:text-[42px] md:leading-[50px] font-CentraNo2Light uppercase italic"> Step by Step</h4>
            </div>
            <div className="mt-6 w-full flex flex-col gap-4">
                {items.map((item) => (
                    <div key={item.id} className="bg-[#091618] rounded-2xl">
                        <button
                            className="w-full text-left py-4 px-4 md:px-6 text-[18px] md:text-[26px] leading-[33.8px] text-[#CBAD7E] flex justify-between items-center"
                            onClick={() => toggleItem(item.id)}
                        >
                            <span className="pt-1.5">{item.title}</span>
                            <span>{openItem === item.id ? <Image src='/icons/arrow.png' alt="arrow" width={24} height={24} /> : <Image src='/icons/arrow.png' alt="arrow" width={24} height={24} className="rotate-180" />}</span>
                        </button>
                        {openItem === item.id && (
                            <div className="px-4 md:px-6 pb-4 text-white text-[14px] md:text-[20px] md:leading-[28px] font-centraRegular">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
