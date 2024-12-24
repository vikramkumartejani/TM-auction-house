'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Navbar from "../components/navbar";

export default function VerificationPage() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(88);
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Submitted code:", code.join(""));
    router.push("/welcome");
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        const nextInput = document.querySelector(
          `input[name="code-${index + 1}"]`
        );
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.querySelector(
        `input[name="code-${index - 1}"]`
      );
      if (prevInput) {
        prevInput.focus();
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
      }
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#0B3434]">
      <Navbar />
      <div className="min-h-screen bg-[#0B3434] flex flex-col justify-center items-center px-4 py-[50px] md:py-[100px]">
        <div className="w-full max-w-[522px]">
          <div className="text-center">
            <h1 className="text-white text-[36px] leading-[50.4px] font-medium">Verify it's you</h1>
            <p className="text-[#FFFFFF8F] text-[17px] leading-[25.5px] font-extralight">
              Enter the verification code we just sent you at
              <span className="text-gradient"> +1 (111)-111-1111.</span>
            </p>

            {/* Verification Code Inputs */}
            <div className="flex justify-center gap-3 mt-[55px] mb-8">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  name={`code-${index}`}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-[80px] sm:w-[121px] h-[50px] sm:h-[87px] rounded-[61px] flex items-center justify-center pt-2 text-center text-[#FFE9C2] text-[32px] font-bold bg-[#0F4141] hover:border border-[#C4A574] focus:border-[#C4A574] outline-none"
                  maxLength={1}
                  autoComplete="off"
                />
              ))}
            </div>

            {/* Resend Timer */}
            <p className="mb-[42px] text-[#FFFFFFB2] text-[17px] leading-[25.5px] font-normal">
              Didn't receive the code? Resend in {formatTime(timeLeft)}
            </p>

            {/* Submit Button */}
            <button
            style={{background:"linear-gradient(237.24deg, #87603F 15.61%, #FFF3CF 114.56%)"}}
              className="w-full pt-1.5 h-[64px] rounded-xl text-[#0B0A0A] text-[20px] leading-[22px] font-medium"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

