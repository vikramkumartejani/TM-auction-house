"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { FaChevronDown, FaPlus } from "react-icons/fa6";

const categories = [
  { name: "Beginner", icon: "/icons/beginner.png", color: "bg-[#FF7B8B]" },
  {
    name: "Bread and Butter",
    icon: "/icons/bread-and-butter.png",
    color: "bg-[#DC7BA2]",
  },
  { name: "Big Boy", icon: "/icons/big-boy.png", color: "bg-[#2EA1FF]" },
  { name: "Big Boss", icon: "/icons/big-boss.png", color: "bg-[#5D3481]" },
  {
    name: "Collector Price",
    icon: "/icons/collector-price.png",
    color: "bg-[#1B9684]",
  },
  {
    name: "Flash Auctions",
    icon: "/icons/flash-auctions.png",
    color: "bg-[#5264B2]",
  },
];

const watches = [
  {
    id: 1,
    image: "/images/watch2.png",
    title: "1986 Omega Constellation 1448 431.6",
    condition: "Very good condition",
    price: 1599.0,
    timeLeft: "05:45",
    bidder: {
      name: "Jane Cooper",
      image: "/images/leaderboard-profile1.png",
      isTopBidder: true,
    },
  },
  {
    id: 2,
    image: "/images/watch.png",
    title: "1986 Omega Constellation 1448 431.6",
    condition: "Very good condition",
    price: 1599.0,
    timeLeft: "05:45",
    bidder: {
      name: "Jane Cooper",
      image: "/images/leaderboard-profile1.png",
      isTopBidder: true,
    },
  },
  {
    id: 3,
    image: "/images/watch2.png",
    title: "1986 Omega Constellation 1448 431.6",
    condition: "Very good condition",
    price: 1599.0,
    timeLeft: "05:45",
    bidder: {
      name: "Jane Cooper",
      image: "/images/leaderboard-profile1.png",
      isTopBidder: true,
    },
  },
  {
    id: 4,
    image: "/images/watch.png",
    title: "1986 Omega Constellation 1448 431.6",
    condition: "Very good condition",
    price: 1599.0,
    timeLeft: "05:45",
    bidder: {
      name: "Jane Cooper",
      image: "/images/leaderboard-profile1.png",
      isTopBidder: true,
    },
  },
  {
    id: 5,
    image: "/images/watch2.png",
    title: "1986 Omega Constellation 1448 431.6",
    condition: "Very good condition",
    price: 1599.0,
    timeLeft: "05:45",
    bidder: {
      name: "Jane Cooper",
      image: "/images/leaderboard-profile1.png",
      isTopBidder: true,
    },
  },
  {
    id: 6,
    image: "/images/watch.png",
    title: "1986 Omega Constellation 1448 431.6",
    condition: "Very good condition",
    price: 1599.0,
    timeLeft: "05:45",
    bidder: {
      name: "Jane Cooper",
      image: "/images/leaderboard-profile1.png",
      isTopBidder: true,
    },
  },
  // Add more watches as needed
];

export default function ExploreWatches() {
  const [activeTab, setActiveTab] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const tabs = ["All", "Auctions", "Listings", "Sold"];

  return (
    <main className="min-h-screen text-white mt-[22px]">
      <h1 className="md:text-[28px] text-[20px] md:mb-[24px] mb-[19px]">
        Explore Watches
      </h1>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-between gap-[8px] mb-[16px]">
        <div className="relative">
          {/* Desktop Tabs */}
          <div className="hidden sm:flex gap-[4px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-[14px] pt-[17px] rounded-full ${
                  tab === "All" ? "px-[40px]" : "px-[25px]"
                } ${
                  activeTab === tab
                    ? "bg-[#FFE9C2] text-[#0B0A0A]"
                    : "bg-[#091618] text-white font-centraRegular"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="sm:hidden flex flex-col min-w-[123px]">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex justify-between items-center pb-[12px] pt-[11px] px-[20px] bg-[#FFE9C2]  text-[14px] text-[#0B0A0A] rounded-full"
            >
              <span className="pt-[7px]">{activeTab}</span>
              <FaChevronDown
                className={`transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-[60px] left-0 w-full bg-[#091618] shadow-lg rounded-lg z-[9]">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-[20px] py-[12px] rounded-lg ${
                      activeTab === tab
                        ? "bg-[#FFE9C2] text-[#0B0A0A]"
                        : "text-white hover:bg-[#0B0A0A]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center md:gap-[11px] gap-[8px] max-w-[418px] w-full">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-[356px] w-full">
            <FiSearch
              size={24}
              className="absolute md:left-4 left-[14px] top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search watch..."
              className="w-full bg-[#1a1d1c] h-full rounded-full px-[14px] md:pb-[13px] pb-[5px]  md:pt-[16px] pt-[8px] font-centraRegular pl-12 text-white placeholder-[#FFFFFFB2] placeholder:text-[14px] focus:outline-none"
            />
          </div>
          <div className="md:min-w-[50px] min-w-[38px] md:w-[50px] w-[38px] md:h-[50px] h-[38px] rounded-full bg-[#093033] flex items-center justify-center">
            <Image
              src="/icons/menu-explore-watch.png"
              alt="menu icon"
              width={24}
              height={24}
              className="md:w-[24px] md:h-[24px] w-[18.24px] h-[18.24px]"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-[4px] mb-[16px] overflow-x-auto pb-2 custom-scrollbar">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center gap-[10px] bg-[#1a1d1c] ps-[4px] pe-4 py-[5px] rounded-full whitespace-nowrap text-[12px] font-centraRegular"
          >
            <div
              className={`md:w-[40px] w-[25px] md:h-[40px] h-[25px] md:min-w-[40px] min-w-[25px] rounded-full flex items-center jusitfy-center ${category.color}`}
            >
              <img
                src={category.icon}
                alt="icon"
                className="md:w-[25px] w-[16px] md:h-[25px] h-[16px] mx-auto"
              />
            </div>
            {category.name}
          </button>
        ))}
      </div>

      {/* Watch Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {watches.map((watch) => (
          <div
            key={watch.id}
            className="bg-[#091618] rounded-[16px] overflow-hidden p-[8px]"
          >
            <div className="relative">
              <img
                src={watch.image}
                alt={watch.title}
                className="w-full md:h-[167px] h-[153.75px] object-cover md:rounded-[12px] rounded-[6px]"
              />
              <button className="absolute top-[8px] right-[8px] md:w-[40px] w-[33px] md:h-[40px] h-[33px] flex items-center justify-center rounded-full bg-black/50">
                <GoHeart className="md:w-[24px] w-[16px] md:h-[24px] h-[16px]" />
              </button>
              <div className="md:block hidden absolute top-[8px] left-[8px]">
                <div className="bg-[#F7F1E7] flex items-center gap-[6px] rounded-full p-[4px] pe-[15px] text-sm">
                  <Image
                    src={watch.bidder.image}
                    alt={watch.bidder.name}
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] min-w-[24px] rounded-full"
                  />
                  <div>
                    <p className="text-[10px] leading-[13px] text-[#0B0A0A]">
                      {watch.bidder.name}
                    </p>
                    {watch.bidder.isTopBidder && (
                      <p className="flex  items-center text-[#F7F1E7] font-centraRegular text-[7px] ps-[3px] pe-[7px] pt-[3px] leading-[0px] h-[13px] bg-[#093033] rounded-[4px]">
                        <img
                          src="/icons/medal.png"
                          alt="medal"
                          className="w-[13px]"
                        />{" "}
                        Top Bidder
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[8px] right-[8px] text-black rounded-full">
                <span className="md:text-[14px] text-[10.24px] text-[#145452] bg-white px-[12px] h-[40px] pb-[9px] pt-[14px] rounded-l-[8px]">
                  21:{watch.timeLeft}
                </span>
                <span className="font-centraRegular text-[#093033] bg-[#FFE9C2] text-[10.24px] md:text-[14px] px-[12px] h-[40px] pb-[9px] pt-[14px] rounded-r-[8px]">
                  ${watch.price.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="px-[8px] pt-[28px] pb-[17px]">
              <h3 className="md:text-[16px] text-[14px] text-[#FFE9C2] font-semibold mb-[10px]">
                {watch.title}
              </h3>
              <p className="md:text-[16px] text-[12px] text-white font-centraRegular mb-[26px]">
                {watch.condition}
              </p>
              <button className="md:block hidden w-full bg-[#8BDB00] text-[#0B0A0A] pb-3 pt-4 rounded-full hover:bg-[#84b824] transition-colors">
                Place Bid
              </button>
              <div className="bg-[#F7F1E7] md:hidden flex items-center justify-between gap-[6px] rounded-full p-[4px] pe-[4px] text-sm">
                <div className="flex items-center gap-[6px]">
                  <Image
                    src={watch.bidder.image}
                    alt={watch.bidder.name}
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] min-w-[24px] rounded-full"
                  />
                  <div>
                    <p className="text-[10px] leading-[13px] text-[#0B0A0A]">
                      {watch.bidder.name}
                    </p>
                    {watch.bidder.isTopBidder && (
                      <p className="flex  items-center text-[#F7F1E7] font-centraRegular text-[7px] ps-[3px] pe-[7px] pt-[3px] leading-[0px] h-[13px] bg-[#093033] rounded-[4px]">
                        <img
                          src="/icons/medal.png"
                          alt="medal"
                          className="w-[13px]"
                        />{" "}
                        Top Bidder
                      </p>
                    )}
                  </div>
                </div>
                <button className="md:hidden flex items-center justify-center bg-[#8BDB00] text-[#0B0A0A] py-3 w-[32px] h-[32px] rounded-full hover:bg-[#84b824] transition-colors">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
