import React from "react";
import Marquee from "react-fast-marquee";

const MovingBanner = () => {
  return (
    <>
      <div className="h-[44px] flex"></div>
      <div className="fixed top-0 left-0 z-[99] bg-[#FFE9C2] text-[#093033] py-[6px] h-[44px] flex items-center justify-center">
        <Marquee gradient={false} speed={50}>
          <p className="inline-flex items-center px-2 text-[14px] font-[500] text-[#093033]">
            <span className="pt-1">
              Rolex Day-Date Yellow Gold President "Money Green" 118138
            </span>
          </p>
          <p className="inline-flex items-center px-2 text-[14px] font-[500] text-[#093033] space-x-[8px]">
            <span className="text-[#FFFFFFCC] h-[32px] px-[12px] pb-[1px] pt-[7px] rounded-[8px] bg-[#2F3EBC]">
              @kscfc26
            </span>
            <span className="pt-1">
              <span className="text-[#2F3EBC]">bid $88.00 on</span> 1986 Omega
              Constellation 1448 431.6
            </span>
          </p>
          <p className="inline-flex items-center px-2 text-[14px] font-[500] text-[#093033] space-x-[8px]">
            <span className="text-[#FFFFFFCC] h-[32px] px-[12px] pb-[1px] pt-[7px] rounded-[8px] bg-[#2F3EBC]">
              @kscfc26
            </span>
            <span className="pt-1">
              <span className="text-[#2F3EBC]">bid $1,599.00 on</span> Omega 007
              "James Bond" Limited Edition Seamaster Diver 300M
            </span>
          </p>
        </Marquee>
      </div>
    </>
  );
};

export default MovingBanner;
