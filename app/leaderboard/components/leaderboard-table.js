"use client";

const LeaderboardTable = ({ data, showWatchImage = false }) => (
  <div className="rounded-lg overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b text-[#79A09F] border-[#0B4447]">
            <th className="text-left p-4 font-medium">Rank</th>
            <th className="text-left p-4 font-medium">Name</th>
            {showWatchImage ? (
              <>
                <th className="text-right p-4 font-medium">Starting Price</th>
                <th className="text-right p-4 font-medium">Last Bid</th>
              </>
            ) : (
              <>
                <th className="text-right p-4 font-medium">Watches Bought</th>
                <th className="text-right p-4 font-medium">Total Value</th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="bg-[#0B4447]/50">
          {data.map((item) => (
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
                  {showWatchImage ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <img
                      src={item.userImage || "/assets/default-avatar.png"}
                      alt={item.name}
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                  <span className="text-white">{item.name}</span>
                </div>
              </td>
              <td className="p-4 text-right text-[#FFE9C2]">
                {showWatchImage
                  ? `$${item.startingPrice.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}`
                  : item.watchesBought}
              </td>
              <td className="p-4 text-right text-[#FFE9C2]">
                $
                {item.totalValue?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                }) ||
                  item.lastBid.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default LeaderboardTable;
