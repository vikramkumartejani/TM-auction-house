"use client";
import Sidebar from "../components/sidebar";
import MovingBanner from "./MovingBanner";
import StatsCard from "./StatsCard";
import Leaderboard from "./Leaderboard";
import ExploreWatches from "./ExploreWatches";
import BottomBar from "../components/BottomBar";
import DashboardNavbar from "../components/DashboardNavbar";

export default function Dashboard() {
  return (
    <div className="bg-[#010A0B] pt-4">
      <div className="px-4">
      <DashboardNavbar />
      </div>
      <div className="min-h-screen bg-[#010A0B] flex items-center justify-center overflow-hidden">
        <Sidebar />
        <div className="text-white min-h-screen">
          {/* <MovingBanner /> */}
          <div className="xl:px-[24px] xl:py-[24px] md:px-[20px] py-[20px] px-[16px]">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[24px] items-start">
              {/* Stats Grid - Left Side */}
              <div className="xl:col-span-9 col-span-12 grid grid-cols-1 md:grid-cols-12 gap-[24px]">
                <div className="xl:col-span-7 col-span-12">
                  <div className="grid sm:grid-cols-2 md:gap-[16px] gap-[8px]">
                    <StatsCard
                      icon="/icons/smartwatch.png"
                      title="Watches Sold"
                      value="1427"
                      change={12.4}
                      label="From Previous Month"
                    />
                    <StatsCard
                      icon="/icons/dollar.png"
                      title="Total Value Sold"
                      value="$15,839.00"
                      change={12.4}
                      label="From Previous Month"
                    />
                    <StatsCard
                      icon="/icons/group.png"
                      title="Unique Buyers"
                      value="1427"
                      change={-8.6}
                      label="From Previous Month"
                    />
                    <StatsCard
                      icon="/icons/trophy.png"
                      title="Total Winnings"
                      value="$32,933.00"
                      change={12.4}
                      label="From Previous Month"
                    />
                  </div>
                </div>

                {/* Main Auction Card - Middle */}
                <div className="xl:col-span-5 col-span-12 flex justify-center rounded-[16px] xl:overflow-hidden overflow-x-auto relative xl:gap-0 gap-[8px] pb-2 custom-scrollbar">
                  <img
                    src="/images/auction-bg.png"
                    alt="background shade"
                    className="absolute left-0 bottom-0 h-full w-full xl:block hidden"
                  />
                  <div className="rounded-[16px] overflow-hidden max-w-[360px] xl:w-full xl:min-w-[360px] min-w-[320px] w-[360px] flex flex-col">
                    <div className="relative">
                      <img
                        src="/images/watch.png"
                        alt="Watch"
                        className="w-full h-[189px] object-cover"
                      />
                      <span className="absolute top-[10px] left-[10px] bg-white text-[#0B0A0A] px-[16px] pt-[8px] pb-[4px] rounded-full text-sm font-[500]">
                        Today's Top Auction
                      </span>
                    </div>
                    <div
                      className="px-[16px] pt-[20px] pb-[11px] rounded-t-[20px] -mt-[43px] flex-1 relative z-10 flex flex-col justify-between"
                      style={{
                        background:
                          "linear-gradient(57.24deg, #87603F -14.56%, #FFF3CF 84.39%)",
                      }}
                    >
                      <div className="flex justify-between items-center gap-2 mb-[20px]">
                        <h2 className="md:text-[18px] text-[16px] font-bold text-[#0B0A0A]">
                          1986 Omega Constellation 1448
                        </h2>
                        <div className="text-[#0B0A0A]">
                          <p className="text-[12px] font-centraRegular mb-[4px]">
                            Leading Bid
                          </p>
                          <p className="md:text-[18px] text-[16px]">$12,200.00</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center flex-wrap gap-1">
                        <div>
                          <p className="mb-[8px] text-[#0B0A0A] font-centraRegular text-[12px] md:text-[14px] font-[400]">
                            Auction Ending In
                          </p>
                          <div className="flex gap-[6px]">
                            <TimeBox value="21" label="Hours" />
                            <TimeBox value="21" label="Minutes" />
                            <TimeBox value="21" label="Seconds" />
                          </div>
                        </div>
                        <button className="md:bg-[#093033] bg-[#8BDB00] text-[#0B0A0A] md:text-white px-[22px] pt-[17px] pb-[15px] text-xs rounded-full hover:bg-opacity-90 transition-colors">
                          Place a bid
                        </button>
                      </div>
                    </div>
                  </div>
                  <diV className="xl:hidden flex gap-[8px] ">
                    <div className="max-w-[300px] w-[300px]">
                      <Leaderboard
                        title="King of the Hills"
                        data={kingOfTheHillsData}
                        viewAllProp="View all"
                      />
                    </div>
                  </diV>
                </div>

                <div className="col-span-12">
                  <ExploreWatches />
                </div>
              </div>

              {/* Leaderboard - Right Side */}
              <div className="xl:col-span-3 xl:flex hidden flex-col gap-[24px]">
                <div className="xl:flex hidden">
                  <Leaderboard
                    title="King of the Hills"
                    data={kingOfTheHillsData}
                    viewAllProp="View all"
                  />
                </div>
                <Leaderboard
                  title="Hot Money"
                  data={hotMoneyData}
                  viewAllProp="View all"
                />
                <Leaderboard
                  title="Top watches"
                  data={topWatchesData}
                  viewAllProp="View all"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <BottomBar />
        </div>
      </div>
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[6px] text-center">
      <div className="bg-white px-[20.5px] pt-[9px] pb-1 rounded-full text-[14px]">
        <p className="text-[#0B0A0A] text-sm">{value}</p>
      </div>
      <p className="text-xs text-[#0B0A0A] font-centraRegular">{label}</p>
    </div>
  );
}

const kingOfTheHillsData = [
  {
    name: "Wade Warren",
    subtitle: "Alexy",
    amount: "1,599.00",
    trend: "up",
    image: "/images/leaderboard-profile1.png",
    icon: "/icons/diamond.png",
  },
  {
    name: "Jane Cooper",
    subtitle: "Taylor",
    amount: "1,200.00",
    trend: "down",
    image: "/images/leaderboard-profile2.png",
    icon: "/icons/trophy2.png",
  },
  {
    name: "John Doe",
    subtitle: "Chris",
    amount: "950.00",
    trend: "up",
    image: "/images/leaderboard-profile3.png",
    icon: "/icons/badge.png",
  },
  {
    name: "Alice Smith",
    subtitle: "Davis",
    amount: "850.00",
    trend: "down",
    image: "/images/leaderboard-profile1.png",
    icon: "/icons/badge2.png",
  },
  {
    name: "Williams",
    subtitle: "Davis",
    amount: "850.00",
    trend: "down",
    image: "/images/leaderboard-profile2.png",
    icon: "/icons/medal.png",
  },
];

const hotMoneyData = [
  {
    name: "Wade Warren",
    subtitle: "Alexy",
    amount: "1,599.00",
    trend: "up",
    image: "/images/leaderboard-profile1.png",
    icon: "/icons/diamond.png",
  },
  {
    name: "Jane Cooper",
    subtitle: "Taylor",
    amount: "1,200.00",
    trend: "down",
    image: "/images/leaderboard-profile2.png",
    icon: "/icons/trophy2.png",
  },
  {
    name: "John Doe",
    subtitle: "Chris",
    amount: "950.00",
    trend: "up",
    image: "/images/leaderboard-profile3.png",
    icon: "/icons/badge.png",
  },
  {
    name: "Alice Smith",
    subtitle: "Davis",
    amount: "850.00",
    trend: "down",
    image: "/images/leaderboard-profile1.png",
    icon: "/icons/badge2.png",
  },
  {
    name: "Williams",
    subtitle: "Davis",
    amount: "850.00",
    trend: "down",
    image: "/images/leaderboard-profile2.png",
    icon: "/icons/medal.png",
  },
];

const topWatchesData = [
  {
    name: "Wade Warren",
    subtitle: "Alexy",
    amount: "1,599.00",
    trend: "up",
    image: "/images/leaderboard-profile1.png",
  },
  {
    name: "Jane Cooper",
    subtitle: "Taylor",
    amount: "1,200.00",
    trend: "down",
    image: "/images/leaderboard-profile2.png",
  },
  {
    name: "John Doe",
    subtitle: "Chris",
    amount: "950.00",
    trend: "up",
    image: "/images/leaderboard-profile3.png",
  },
  {
    name: "Alice Smith",
    subtitle: "Davis",
    amount: "850.00",
    trend: "down",
    image: "/images/leaderboard-profile1.png",
  },
  {
    name: "Williams",
    subtitle: "Davis",
    amount: "850.00",
    trend: "down",
    image: "/images/leaderboard-profile2.png",
  },
];
