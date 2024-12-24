"use client";

import { useState } from "react";
import Sidebar from "../components/sidebar";
import Image from "next/image";
import Link from "next/link";

export default function PaymentProof() {
  const [paymentType, setPaymentType] = useState("offsite");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center">
      <Sidebar />

      <div className=" w-full">
        <button
          className="fixed top-10 left-[126px] flex items-center gap-1 text-white hover:text-gray-200 transition-colors z-10"
        >
          <Image src='/icons/chevron-left.svg' alt="chevron-left" width={34} height={34} />
          <span className="text-[#FFFFFF] text-[20px] pt-1 leading-[20px] font-light">Back</span>
        </button>

        <main className="p-8 max-w-[629px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-white text-[36px] font-bold">
              Payment Methods
            </h1>
            <p className="text-white/80 -mt-1 text-[16px] leading-[22px] font-light">
              Our verification confirms your watch's authenticity.
            </p>
          </div>

          <div className="max-w-[398px] mx-auto w-full bg-[#093033] p-[7px] min-h-[56px] rounded-full flex mb-9 overflow-hidden">
            <button
              className={`flex-1 min-h-[41px] pt-1 px-4 rounded-full text-sm ${paymentType === "online"
                ? "bg-white text-[#0B0A0A]"
                : "text-[#FFFFFFB2] hover:text-white"
                }`}
              onClick={() => setPaymentType("online")}
            >
              Online Payment
            </button>
            <button
              className={`flex-1 min-h-[41px] px-4 pt-1 rounded-full text-sm ${paymentType === "offsite"
                ? "bg-white text-black"
                : "text-gray-400 hover:text-white"
                }`}
              onClick={() => setPaymentType("offsite")}
            >
              Off-site payment
            </button>
          </div>

          <div className="bg-[#091618] rounded-lg p-12 mb-8">
            <label className="flex flex-col items-center justify-center w-full h-48 rounded-lg cursor-pointer transition-colors">
              {file ? (
                <img
                  src={file}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <img src="/upload.svg" />
                  <p className="text-white text-[16px] leading-[24px] tracking-[-0.02em] mt-4 font-medium">
                    Upload your Payment Image
                  </p>
                  <p className="text-white/60 text-sm leading-[24px] tracking-[-0.02em] m2-2 font-light">Maximum Size 10 Kb</p>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
            </label>
          </div>

          <Link href='/payment-confirmation'>
            <button
              className="w-full bg-[#8BDB00] opacity-25 hover:opacity-100 pt-1 rounded-xl transition duration-300 text-[#010A0B] font-medium h-[56px]"
            >
              Next
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
}
