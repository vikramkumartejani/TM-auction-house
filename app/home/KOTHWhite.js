import Image from "next/image";
import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

// Leaderboard Item Component
const LeaderboardItem = ({ name, subtitle, amount, trend, image, icon }) => {
  return (
    <div className="xl:bg-transparent bg-white xl:px-0 xl:py-0 px-[8px] py-[6px] rounded-[8px] flex items-center justify-between gap-1 xl:text-white text-[#0B0A0A]">
      <div className="flex items-center gap-[12px]">
        <div className="relative min-w-[40px] w-[40px] h-[40px] rounded-full border-[1.8px] border-[#CBAD7E] bg-gray-700">
          <Image
            src={image}
            alt="profile"
            width={40}
            height={40}
            className="w-full h-full rounded-full object-cover"
          />
          {icon && (
            <div className="absolute right-[-4px] bottom-[-6px]">
              <div className="min-w-[21px] w-[21px] h-[21px] border-[1px] pt-[2px] ps-[1px] border-black rounded-full flex items-center justify-center bg-white">
                <Image
                  src={icon}
                  alt="icon"
                  width={16}
                  height={16}
                  className="w-[14px] h-[14px] rounded-full"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col xl:gap-1 pt-[4px]">
          <p className="text-[14px]">{name}</p>
          <p className="text-[12px] xl:text-[#FFFFFFB2] text-[#0B0A0A99] font-centraRegular">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex items-center xl:gap-2 gap-1">
        <span className="xl:text-[#CBAD7E] text-[#0B0A0A] text-[14px] pt-1">
          ${amount}
        </span>
        {trend === "up" ? (
          <IoMdArrowDropup size={20} className="text-[#2AB540]" />
        ) : (
          <IoMdArrowDropdown size={20} className="text-[#D91002]" />
        )}
      </div>
    </div>
  );
};

// Leaderboard Component
const KOTHWhite = ({
  title = "Leaderboard",
  data = [],
  viewAllProp = "View all",
}) => {
  return (
    <div className="bg-goldenGradient xl:bg-[#091618] xl:bg-none rounded-[16px] xl:p-[24px] p-[16px]">
      <div className="flex xl:flex-row flex-col xl:justify-between xl:items-center xl:pb-[22px] pb-[14px] xl:gap-1 gap-[2px] xl:border-b border-[#FFFFFF1A]">
        <h2 className="text-[20px] xl:text-white text-[#0B0A0A] xl:capitalize uppercase">
          {title}
        </h2>
        <button className="xl:flex hidden text-[14px] text-[#FFFFFFB2] hover:text-white">
          {viewAllProp}
        </button>
        <p className="xl:hidden flex text-[#0B0A0A] text-[14px] font-centraRegular mt-[-2px]">
          Users winning the most
        </p>
      </div>
      <div className="xl:space-y-[24px] space-y-[4px] xl:pt-[20px]">
        {data.map((item, index) => (
          <LeaderboardItem
            key={index}
            name={item.name}
            subtitle={item.subtitle}
            amount={item.amount}
            trend={item.trend}
            image={item.image}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default KOTHWhite;
