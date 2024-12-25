"use client";

import { useState } from "react";
import { Trophy, Users, Target } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";

const topWatches = [
  {
    position: 2,
    name: "Rolex DateJust",
    image: "/assets/watch.png",
    lastBid: 23392.0,
    startingFrom: 16454.0,
  },
  {
    position: 1,
    name: "GMT Master - II",
    image: "/assets/watch-2.png",
    lastBid: 23392.0,
    startingFrom: 16454.0,
  },
  {
    position: 3,
    name: "Rolex DateJust",
    image: "/assets/watch-3.png",
    lastBid: 23392.0,
    startingFrom: 16454.0,
  },
];

const tableData = Array(5)
  .fill(null)
  .map((_, index) => ({
    rank: index + 4,
    image: "/assets/watch.png",
    name: "Rolex Day-Date Presidential 36mm Yellow Gold 118238",
    startingPrice: 23392.0,
    lastBid: 23392.0,
  }));

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("watches");
  const [timeFilter, setTimeFilter] = useState("daily");

  return (
    <DashboardLayout className="min-h-screen bg-[#093033] p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Leaderboard</h1>
          <p className="text-gray-400 text-sm">
            Highest value watches auctioned and sold on TMA
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("watches")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                ${
                  activeTab === "watches"
                    ? "bg-[#FFE9C2] text-[#0B0A0A]"
                    : "bg-[#0B4447] text-white"
                }`}
            >
              {activeTab === "watches" ? (
                <img src="/icons/watch-golden.svg" className="h-7 w-7" />
              ) : (
                <img src="/icons/watch.svg" className="h-7 w-7" />
              )}
              Top Watches
            </button>
            <button
              onClick={() => setActiveTab("buyers")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                ${
                  activeTab === "buyers"
                    ? "bg-[#FFE9C2] text-[#0B0A0A]"
                    : "bg-[#0B4447] text-white"
                }`}
            >
              {activeTab === "buyers" ? (
                <img src="/icons/person-golden.svg" className="h-5 w-5" />
              ) : (
                <img src="/icons/person.svg" className="h-5 w-5" />
              )}
              Top Buyers
            </button>
            <button
              onClick={() => setActiveTab("bidders")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                ${
                  activeTab === "bidders"
                    ? "bg-[#FFE9C2] text-[#0B0A0A]"
                    : "bg-[#0B4447] text-white"
                }`}
            >
              {activeTab === "bidders" ? (
                <img src="/icons/bid-golden.svg" className="h-5 w-5" />
              ) : (
                <img src="/icons/bid.svg" className="h-5 w-5" />
              )}
              Top Bidders
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Sort By:</span>
            {["daily", "weekly", "monthly", "yearly"].map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors
                  ${
                    timeFilter === filter
                      ? "bg-[#FFE9C2] text-[#0B0A0A]"
                      : "bg-[#0B4447] text-white"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Winners */}
        <div className="grid grid-cols-3 py-10 gap-6 relative">
          {topWatches.map((watch, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center ${
                index === 1 ? "absolute top-[-40px]" : ""
              }`}
            >
              <div className="relative">
                <div className="h-[143px] w-[143px] overflow-hidden rounded-full">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="h-full w-full object-cover rounded-full border-4 border-[#0B4447]"
                  />
                </div>
                <h3 className="text-white text-center font-medium">
                  {watch.name}
                </h3>
                <div
                  className={`absolute -bottom-12 left-1/2 -translate-x-1/2 w-[40px] h-[40px] rounded-md flex items-center justify-center text-white font-medium text-sm
            ${
              watch.position === 1
                ? "bg-blue-600 translate-y-[-8px]" // Move 1st position slightly higher
                : watch.position === 2
                ? "bg-red-600"
                : "bg-green-600"
            }`}
                >
                  {watch.position}
                </div>
              </div>
              <div className="mt-6 leaderboard-winner-bg-gradient w-full pt-10 text-center">
                <div className="mt-2">
                  <div className="text-[24px] font-bold text-[#FFE9C2]">
                    $
                    {watch.lastBid.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                  <div className="text-[#79A09F] text-sm">
                    Last Bidding Price
                  </div>
                </div>
                <div className="mt-8 text-sm text-[#79A09F]">
                  Starting From $
                  {watch.startingFrom.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className=" rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b text-[#79A09F] border-[#0B4447]">
                <th className="text-left p-4  font-medium">Rank</th>
                <th className="text-left p-4  font-medium">Name</th>
                <th className="text-right p-4  font-medium">Starting Price</th>
                <th className="text-right p-4  font-medium">Last Bid</th>
              </tr>
            </thead>
            <tbody className="bg-[#0B4447]/50">
              {tableData.map((item) => (
                <tr
                  key={item.rank}
                  className="border-b border-[#0B4447] hover:bg-[#0B4447]/30"
                >
                  <td className="p-4">
                    <div className="flex items-start gap-2">
                      <img src="/icons/trophy.svg" className="h-4 w-4" />
                      <span className="text-white">{item.rank}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <span className="text-white">{item.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right text-[#FFE9C2]">
                    $
                    {item.startingPrice.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-4 text-right text-[#FFE9C2]">
                    $
                    {item.lastBid.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
