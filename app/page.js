"use client";
import React from "react";
import Navbar from "./components/navbar";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-[#0B3434] px-4 w-full">
      <Navbar />
      <div className="w-full max-w-[522px] mx-auto py-[50px]">
        <div className="">
          <h1 className="text-white leading-[50.4px] text-[36px] font-medium text-center">
            Log In
          </h1>
          <p className="mt-3 text-sm font-centraRegular text-center text-gradient">
            Please select your country and enter mobile number
          </p>

          <div className="mt-[55px]">
            <h4 className="text-[#FFFFFF] text-[18px] font-centraRegular font-normal leading-[22px]">
              Phone number
            </h4>
            <div className="my-4 w-full bg-white rounded-xl h-[64px] flex items-center ">
              <div className="min-w-[94px] flex items-center justify-center gap-2 h-full rounded-l-xl px-4 border-r border-[#EBEBEB]">
                <Image
                  src="/icons/number-flag.svg"
                  alt="number"
                  width={32}
                  height={21}
                />
                <Image
                  src="/icons/arrow-flag.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </div>
              <input
                type="text"
                placeholder="+1 (111)-111-1111"
                className="pt-[6px] leading-normal w-full outline-none border-none px-8 placeholder:text-[#0B0A0A99] text-[18px] font-normal text-[#0B0A0A]"
              />
            </div>

            <p className="text-[#FFFFFFB2] text-[17px] font-normal font-centraRegular leading-[25.5px]">
              Requires country code, we will send you a verification code via
              SMS
            </p>

            <Link
              href="/verification"
              style={{
                background:
                  "linear-gradient(237.24deg, #87603F 15.61%, #FFF3CF 114.56%)",
              }}
              className="mt-8 w-full text-white pt-1 font-medium h-[64px] flex items-center justify-center rounded-[171px] text-[20px] leading-[22px]"
            >
              Send SMS
            </Link>

            <div className="mt-[55px] flex items-center gap-8">
              <div className="flex-1 h-px bg-[#FFFFFF1A]"></div>
              <span className="text-[#FFFFFFB2] text-[17px] leading-[25.5px] font-normal pt-1">
                Or
              </span>
              <div className="flex-1 h-px bg-[#FFFFFF1A]"></div>
            </div>

            <button className="mt-6 flex items-center justify-center gap-2 w-full pt-2 bg-white border border-[#E7E7E7] text-[#10100E] text-[16px] leading-[24px] font-medium h-[64px] rounded-[232px]">
              <Image
                src="/icons/google.svg"
                alt="google"
                width={32}
                height={32}
              />{" "}
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
