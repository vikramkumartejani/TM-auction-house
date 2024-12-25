"use client";

const TopThreeGrid = ({ items }) => (
  <div className="grid grid-cols-3 py-10 gap-6 relative">
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
);

export default TopThreeGrid;
