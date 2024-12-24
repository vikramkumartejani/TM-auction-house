"use client";

import Navbar from "../components/navbar";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-[#0B3434]">
      <Navbar />

      <div className="flex items-center justify-end md:h-full pt-[50px]">
        <div className="w-full">
          <div className=" ">
            <div className="relative z-0">
              <img
                src="/icons/Group 2085664910.svg"
                className="w-full h-[434px]"
                alt="Welcome"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3434] to-transparent"></div>
            </div>
          </div>

          <div className="pb-[152px] max-w-[555px] w-full mx-auto text-center mt-10 px-4">
            <h1 className="text-white text-[64px] font-medium leading-[70px]">Welcome to TM</h1>

            <p className="text-white/80 text-[23px] leading-[32px] font-light px-5">
              We can check details of your watch and verify if it’s registered
              stolen
            </p>

            {/* Submit Button */}
            <Link href='/payments'>
              <button className="w-full bg-[#8BDB00] text-[#010A0B] font-medium text-[20px] leading-[22px] h-[56px] rounded-xl pt-1.5 mt-[42px]">
                Start Verification
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
