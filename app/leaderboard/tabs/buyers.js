"use client";

import TopThreeGrid from "../components/top-three-grids";
import LeaderboardTable from "../components/leaderboard-table";

const BuyersTab = ({ timeFilter }) => {
  const topBuyers = [
    {
      position: 2,
      name: "Rolex DateJust",
      image: "/assets/buyer-2.png",
      lastBid: 23392.0,
      startingFrom: 16454.0,
      watchesBought: 24,
      totalValue: 23392.0,
    },
    {
      position: 1,
      name: "Cristiano Ronaldo",
      image: "/assets/buyer-3.png",
      lastBid: 23392.0,
      startingFrom: 16454.0,
      watchesBought: 24,
      totalValue: 23392.0,
    },
    {
      position: 3,
      name: "Tom Hank",
      image: "/assets/buyer.png",
      lastBid: 23392.0,
      startingFrom: 16454.0,
      watchesBought: 24,
      totalValue: 23392.0,
    },
  ];

  const tableData = Array(5)
    .fill(null)
    .map((_, index) => ({
      rank: index + 4,
      userImage: "/assets/buyer-3.png",
      name: "@BobbySimghiaKing",
      watchesBought: 24 - index * 2,
      totalValue: 23392.0,
    }));

  return (
    <>
      <TopThreeGrid items={topBuyers} />
      <LeaderboardTable data={tableData} showWatchImage={false} />
    </>
  );
};

export default BuyersTab;
