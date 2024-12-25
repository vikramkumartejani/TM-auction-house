"use client";

import TopThreeGrid from "../components/top-three-grids";
import LeaderboardTable from "../components/leaderboard-table";

const BiddersTab = ({ timeFilter }) => {
  const topBidders = [
    {
      position: 2,
      name: "John Doe",
      image: "/assets/buyer.png",
      lastBid: 23392.0,
      startingFrom: 16454.0,
      watchesBought: 24,
      totalValue: 23392.0,
    },
    {
      position: 1,
      name: "Jane Smith",
      image: "/assets/buyer-2.png",
      lastBid: 23392.0,
      startingFrom: 16454.0,
      watchesBought: 24,
      totalValue: 23392.0,
    },
    {
      position: 3,
      name: "Mike Johnson",
      image: "/assets/buyer-3.png",
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
      userImage: "/assets/buyer.png",
      name: "@TopBidder" + (index + 1),
      watchesBought: 24 - index * 2,
      totalValue: 23392.0,
    }));

  return (
    <>
      <TopThreeGrid items={topBidders} />
      <LeaderboardTable data={tableData} showWatchImage={false} />
    </>
  );
};

export default BiddersTab;
