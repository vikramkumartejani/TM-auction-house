"use client";
import Sidebar from "../components/sidebar";
import Image from "next/image";
import Link from "next/link";

export default function AddPayment() {

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center">
      <Sidebar />

      <div className=" w-full">
        <Link href='/payment'>
          <button
            className="fixed top-10 left-[126px] flex items-center gap-1 text-white hover:text-gray-200 transition-colors z-10"
          >
            <Image src='/icons/chevron-left.svg' alt="chevron-left" width={34} height={34} />
            <span className="text-[#FFFFFF] text-[20px] pt-1 leading-[20px] font-light">Back</span>
          </button>
        </Link>

        <main className="p-8 max-w-[629px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-white text-[36px] font-[700] ">
              Add Payment Method
            </h1>
            <p className="text-white/80 text-[16px] font-light">
              Our verification confirms your watch's authenticity.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <input
                name="username"
                type="text"
                placeholder="User name"
                className="bg-[#091618] w-full outline-none rounded-lg px-5 placeholder:text-[#FFFFFFB2] text-[#CBAD7E] font-light text-[16px] pt-1 h-[56px]"
              />
            </div>
            <input
              name="Card number"
              type="text"
              placeholder="Card number"
              className="bg-[#091618] w-full outline-none rounded-lg px-5 placeholder:text-[#FFFFFFB2] text-[#CBAD7E] font-light text-[16px] pt-1 h-[56px]"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="Expiry date"
                type="text"
                placeholder="Expiry date"
                className="bg-[#091618] w-full outline-none rounded-lg px-5 placeholder:text-[#FFFFFFB2] text-[#CBAD7E] font-light text-[16px] pt-1 h-[56px]"
              />
              <input
                name="CVC"
                type="text"
                placeholder="CVC"
                className="bg-[#091618] w-full outline-none rounded-lg px-5 placeholder:text-[#FFFFFFB2] text-[#CBAD7E] font-light text-[16px] pt-1 h-[56px]"
              />
            </div>

            <Link href='/payment-proof'>
              <button
                className="mt-[56px] w-full bg-[#8BDB00] opacity-25 hover:opacity-100 pt-1 rounded-xl transition duration-300 text-[#010A0B] font-medium h-[56px]"
              >
                Next
              </button>
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
}
