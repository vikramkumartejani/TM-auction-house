import Image from "next/image";
import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

// Leaderboard Item Component
const LeaderboardItem = ({ name, subtitle, amount, trend, image, icon }) => {
  return (
    <div className="rounded-[8px] flex items-center justify-between gap-1 text-white">
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
          <p className="text-[12px] text-[#FFFFFFB2] font-centraRegular">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex items-center xl:gap-2 gap-1">
        <span className="text-[#CBAD7E] text-[14px] pt-1">${amount}</span>
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
const Leaderboard = ({
  title = "Leaderboard",
  data = [],
  viewAllProp = "View all",
}) => {
  return (
    <div className="bg-[#091618] rounded-[16px] xl:p-[24px] p-[16px]">
      <div className="flex flex-row justify-between items-center xl:pb-[22px] pb-[14px] xl:gap-1 gap-[2px] border-b border-[#FFFFFF1A]">
        <h2 className="text-[20px] text-white capitalize">{title}</h2>
        <button className="text-[14px] text-[#FFFFFFB2] hover:text-white">
          {viewAllProp}
        </button>
      </div>
      <div className="xl:space-y-[24px] space-y-[14px] pt-[20px]">
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

export default Leaderboard;
