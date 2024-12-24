"use client";

import { useState } from "react";
import Sidebar from "../components/sidebar";
import Image from "next/image";
import Link from "next/link";

export default function PaymentMethods() {
  const [paymentType, setPaymentType] = useState("online");
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: "mastercard",
      name: "Master Card",
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "paypal",
      name: "Paypal",
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "apple",
      name: "Apple Wallet",
      icon: "/placeholder.svg?height=32&width=32",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <Sidebar />

      <div className="relative w-full">
        {/* Back Button */}
        <button
          className="fixed top-10 left-[126px] flex items-center gap-1 text-white hover:text-gray-200 transition-colors z-10"
        >
          <Image src='/icons/chevron-left.svg' alt="chevron-left" width={34} height={34} />
          <span className="text-[#FFFFFF] text-[20px] pt-1 leading-[20px] font-light">Back</span>
        </button>

        <main className="p-8 max-w-[631px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-white text-[36px] font-bold">
              Payment Methods
            </h1>
            <p className="text-white/80 text-[16px] leading-[22px] font-light">
              Our verification confirms your watch's authenticity.
            </p>
          </div>

          {/* Payment Type Toggle */}
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

          {/* Conditional Rendering Based on Payment Type */}
          {paymentType === "online" && (
            <div>
              <p className="text-white text-[18px] mb-2 font-light">
                Select payment methods
              </p>
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  className={`w-full flex mb-3 items-center gap-4 h-[66px] px-4 max-w-full min-w-full rounded-lg transition-colors ${selectedMethod === method.id
                    ? "bg-[#091618] hover:border border-[#212231]"
                    : "bg-[#091618] border border-transparent hover:border-gray-600"
                    }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <img
                    src={`/${method.id}.svg`}
                    alt={method.name}
                    className="w-8 h-8"
                  />
                  <span className="text-white text-[14px] font-light leading-[20px] pt-1">{method.name}</span>
                  <div className="ml-auto">
                    <div
                      className={`w-6 h-6 rounded-full ${selectedMethod === method.id
                        ? ""
                        : "border-2 border-[#8C888F]"
                        }`}
                    >
                      {selectedMethod === method.id && (
                        // <div className="w-full h-full rounded-full bg-[#C4A574] border-2 border-[#0F4141]" />
                        <Image src='/icons/checkbox-fill.svg' alt="checkbox-fil" width={24} height={24} />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Add Payment Method */}
          {paymentType === "online" && (
            <button className="text-[#CBAD7E] text-[16px] font-light hover:underline mt-3 mb-[56px]">
              +Add Payment Method
            </button>
          )}

          {paymentType === "offsite" && (
            <p className="text-white text-center mb-[56px]">
              Please proceed with Off-site payment at your nearest facility.
            </p>
          )}

          {/* Next Button */}
          <Link href='/add-payment'>
            <button
              className="w-full bg-[#8BDB00] opacity-25 hover:opacity-100 pt-1 rounded-xl transition duration-300 text-[#010A0B] font-medium h-[56px]"
              onClick={() => console.log("Selected:", selectedMethod)}
            >
              Next
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
}
