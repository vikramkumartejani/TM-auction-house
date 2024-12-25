import Image from "next/image";
import React from "react";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";

const StatsCard = ({ icon, title, value, change, label }) => {
  const isPositive = change >= 0;
  return (
    <div
      className="p-[1px] md:rounded-[16px] rounded-[8px]"
      style={{
        background:
          "linear-gradient(143.06deg, #CBAD7E -1.34%, rgba(255, 255, 255, 0) 40.75%)",
      }}
    >
      <div className="bg-[#091618] md:p-[16px] p-[14px] md:rounded-[16px] rounded-[8px]">
        <div className="flex items-center gap-[8px] md:mb-[16px] mb-[4px]">
          <span className="flex items-center justify-center md:w-[36px] w-[26px] md:h-[36px] h-[26px] rounded-full bg-[#1A2324]">
            <Image
              src={icon}
              alt="icon"
              width={16}
              height={16}
              className="md:w-[16px] md:w-[16px] w-[14px] h-[14px]"
            />
          </span>
          <h3 className="text-sm text-[#FFFFFFCC] font-centraRegular">
            {title}
          </h3>
        </div>
        <p className="md:text-[28px] text-[22px] text-white md:mb-[8px] mb-[4px]">
          {value}
        </p>
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center md:text-sm text-[12px]">
            {isPositive ? (
              <GoArrowUpRight
                size={20}
                strokeWidth={1}
                className="text-[#6FD561] mr-1 min-w-[20px]"
              />
            ) : (
              <GoArrowDownLeft
                size={20}
                strokeWidth={1}
                className="text-[#FC3C3C] mr-1 min-w-[20px]"
              />
            )}
            <span
              className={`pt-1 ${
                isPositive ? "text-[#6FD561]" : "text-[#FC3C3C]"
              }`}
            >
              {Math.abs(change)}%
            </span>
          </div>
          <span className="text-[#FFFFFFCC] md:text-sm text-[10px] pt-1 font-centraRegular">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
