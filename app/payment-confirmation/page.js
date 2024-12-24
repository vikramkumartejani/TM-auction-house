"use client";

export default function PaymentConfirmation() {
  return (
    <div className="min-h-screen w-screen bg-[#010A0B] flex items-center justify-center">
      {/* <Sidebar /> */}

      <div className="relative w-full">
        <main className="p-8 max-w-[629px] mx-auto">
          <div className="bg-[#093033] rounded-lg p-12 text-center">
            <div className="flex justify-center mb-6">
              <img src="/checkmark.svg" />
            </div>

            <h1 className="text-white text-[32px] font-[500] leading-[41px] mb-1">
              Thank you for your order!
            </h1>

            <p className="text-[#FFFFFF]/80 text-[16px] leading-[22px] mb-11 font-light max-w-[450px] w-full mx-auto">
              The estimated time is 48 hours for Rolex and 2 hours for AP
              (Audemars Piguet) and Patek Philippe.
            </p>

            <button
              className="w-full bg-[#8BDB00] rounded-xl  text-[#010A0B] pt-1 font-medium h-[56px] leading-[20px] text-[20px]"
              onClick={() => (window.location.href = "/")}
            >
              Go home
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
