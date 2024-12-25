'use client'
import { useState } from "react";
import Accordion from "./Accordion";
import WhatsThis from "./WhatsThis";
import TermsServices from "./TermsServices";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("howItWorks");

    const tabs = [
        { id: "howItWorks", label: "How it's work?" },
        { id: "whatsThis", label: "What's this?" },
        { id: "termsServices", label: "Terms & Services" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "howItWorks":
                return (
                    <Accordion />
                );
            case "whatsThis":
                return (
                  <WhatsThis/>
                );
            case "termsServices":
                return (
                    <TermsServices/>
                );
            default:
                return null;
        }
    };

    return (
        <div className="">
            <div className="flex items-center flex-wrap gap-1.5">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 flex-grow md:px-6 h-[46px] pt-[3px] rounded-[24px] font-medium text-xs sm:text-sm leading-[18px] ${activeTab === tab.id
                                ? "bg-[#FFE9C2] text-[#0B0A0A]"
                                : "bg-[#093033] text-white font-centraRegular"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="">{renderContent()}</div>
        </div>
    );
};

export default Tabs;
