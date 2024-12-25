"use client";

import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import WatchesTab from "./tabs/watches";
import BuyersTab from "./tabs/buyers";
import BiddersTab from "./tabs/bidders";
import { ChevronDown } from "lucide-react";
import DashboardNavbar from "../components/DashboardNavbar";
import MovingBanner from "../home/MovingBanner";

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("watches");
  const [timeFilter, setTimeFilter] = useState("daily");
  const [isTabsOpen, setIsTabsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const tabs = [
    { id: "watches", label: "Top Watches", icon: "/icons/watch" },
    { id: "buyers", label: "Top Buyers", icon: "/icons/person" },
    { id: "bidders", label: "Top Bidders", icon: "/icons/bid" },
  ];

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
    <div>
      <DashboardLayout className="min-h-screen bg-[#093033] p-4 sm:p-6">
        <div className="w-full md:hidden block">
          <DashboardNavbar />
        </div>
        <div className="md:hidden block">
          <MovingBanner />
        </div>
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Leaderboard
            </h1>
            <p className="text-gray-400 text-sm">
              Highest value watches auctioned and sold on TMA
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="sm:hidden flex justify-between items-center gap-3">
              {/* Mobile Tabs Dropdown */}
              <div className="relative min-w-[43%] ">
                <button
                  onClick={() => setIsTabsOpen(!isTabsOpen)}
                  className="w-full bg-white rounded-full px-4 py-2.5 text-[#0B0A0A] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={`${tabs.find((t) => t.id === activeTab)?.icon || ""
                        }-golden.svg`}
                      className="h-5 w-5"
                    />
                    {tabs.find((t) => t.id === activeTab)?.label}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isTabsOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {isTabsOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl overflow-hidden shadow-lg z-10 py-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setIsTabsOpen(false);
                        }}
                        className="w-full px-4 py-2.5 flex items-center gap-2 hover:bg-gray-50 text-[#0B0A0A]"
                      >
                        <img src={`${tab.icon}-golden.svg`} className="h-5 w-5" />
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Mobile Sort Dropdown */}
              <div className="relative min-w-[46%] ">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="w-full bg-white rounded-full px-4 py-2.5 text-[#0B0A0A] flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#CBAD7E]">Sort By:</span>
                    <span className="capitalize">{timeFilter}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isSortOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {isSortOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl overflow-hidden shadow-lg z-10 py-2">
                    {["daily", "weekly", "monthly", "yearly"].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          setTimeFilter(filter);
                          setIsSortOpen(false);
                        }}
                        className="w-full px-4 py-2.5 hover:bg-gray-50 text-[#0B0A0A] capitalize text-left"
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden sm:flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                  ${activeTab === tab.id
                      ? "bg-[#FFE9C2] text-[#0B0A0A]"
                      : "bg-[#0B4447] text-white"
                    }`}
                >
                  <img
                    src={
                      activeTab === tab.id
                        ? `${tab.icon.replace(".svg", "")}-golden.svg`
                        : `${tab.icon}.svg`
                    }
                    className="h-5 w-5"
                  />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Desktop Sort Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-gray-400 text-sm">Sort By:</span>
              {["daily", "weekly", "monthly", "yearly"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors
                  ${timeFilter === filter
                      ? "bg-[#FFE9C2] text-[#0B0A0A]"
                      : "bg-[#0B4447] text-white"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {renderTabContent()}
        </div>
      </DashboardLayout>
    </div>
  );
}
