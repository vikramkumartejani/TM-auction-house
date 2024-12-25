"use client";

import TopThreeGrid from "../components/top-three-grids";
import LeaderboardTable from "../components/leaderboard-table";

const WatchesTab = ({ timeFilter }) => {
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

  return (
    <>
      <TopThreeGrid items={topWatches} />
      <LeaderboardTable data={tableData} showWatchImage={true} />
    </>
  );
};

export default WatchesTab;
