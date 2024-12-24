import { X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className=" static top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center py-2 md:py-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="TM Auction House Logo"
              className="rounded-full "
            />
          </div>
          <button
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
