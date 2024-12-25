"use client";

import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import WatchesTab from "./tabs/watches";
import BuyersTab from "./tabs/buyers";
import BiddersTab from "./tabs/bidders";

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("watches");
  const [timeFilter, setTimeFilter] = useState("daily");

  const renderTabContent = () => {
    switch (activeTab) {
      case "watches":
        return <WatchesTab timeFilter={timeFilter} />;
      case "buyers":
        return <BuyersTab timeFilter={timeFilter} />;
      case "bidders":
        return <BiddersTab timeFilter={timeFilter} />;
      default:
        return <WatchesTab timeFilter={timeFilter} />;
    }
  };

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

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </DashboardLayout>
  );
}
