"use client";

const TopThreeGrid = ({ items }) => (
  <div>
    <div className="hidden md:grid grid-cols-3 py-10 gap-6 relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center ${
            index === 1 ? "absolute top-[-40px]" : ""
          }`}
        >
          <div className="relative">
            <div className="h-[143px] w-[143px] overflow-hidden rounded-full">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover rounded-full border-4 border-[#0B4447]"
              />
            </div>
            <h3 className="text-white text-center font-medium">{item.name}</h3>
            <div
              className={`absolute -bottom-12 left-1/2 -translate-x-1/2 w-[40px] h-[40px] rounded-md flex items-center justify-center text-white font-medium text-sm
              ${
                item.position === 1
                  ? "bg-blue-600 translate-y-[-8px]"
                  : item.position === 2
                  ? "bg-red-600"
                  : "bg-green-600"
              }`}
            >
              {item.position}
            </div>
          </div>
          <div className="mt-6 leaderboard-winner-bg-gradient w-full pt-10 text-center">
            <div className="mt-2">
              <div className="text-[24px] font-bold text-[#FFE9C2]">
                $
                {item.lastBid.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </div>
              <div className="text-[#79A09F] text-sm">Last Bidding Price</div>
            </div>
            <div className="mt-8 text-sm text-[#79A09F]">
              Starting From $
              {item.startingFrom.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="md:hidden">
      {/* Top Winner */}
      <div className="flex flex-col items-center mb-40">
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 overflow-hidden rounded-full">
              <img
                src={items[0].image}
                alt={items[0].name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-white text-center mt-2">{items[0].name}</div>
          </div>
          <div className="absolute z-30 -bottom-14 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
            1
          </div>
        </div>
        <div className="w-full max-w-xs z-20 mt-10 relative">
          <div className="bg-[#0B4447]/50 rounded-t-xl pt-6 px-4 pb-6 text-center">
            <div className="text-[#FFE9C2] text-2xl font-bold">
              $
              {items[0].lastBid.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </div>
            <div className="text-[#79A9F] text-sm mt-1">Total Value Bought</div>
            <div className="text-white text-sm mt-4">
              Total Watches Bought: {items[0].totalWatches}
            </div>
          </div>
          <div className="absolute w-full h-12 bg-[#0B4447]/30 -bottom-12 rounded-b-[100px]" />
        </div>
      </div>

      {/* Second and Third Places */}
      <div className="grid grid-cols-2 gap-4 relative -mt-12 mb-24">
        {items.slice(1).map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 overflow-hidden rounded-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-white text-center mt-2">{item.name}</div>
              </div>
              <div
                className={`absolute z-30 -bottom-14 left-1/2 -translate-x-1/2 w-8 h-8 ${
                  index === 0 ? "bg-red-600" : "bg-green-600"
                } rounded flex items-center justify-center text-white`}
              >
                {index + 2}
              </div>
            </div>
            <div className="w-full mt-10 relative z-20">
              <div className="bg-[#0B4447]/50 rounded-t-xl pt-6 px-4 pb-6 text-center">
                <div className="text-[#FFE9C2] text-xl font-bold">
                  $
                  {item.lastBid.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </div>
                <div className="text-[#79A9F] text-sm mt-1">
                  Total Value Bought
                </div>
                <div className="text-white text-sm mt-4">
                  Total Watches Bought: {item.totalWatches}
                </div>
              </div>
              <div className="absolute w-full h-10 bg-[#0B4447]/30 -bottom-10 rounded-b-[100px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TopThreeGrid;
