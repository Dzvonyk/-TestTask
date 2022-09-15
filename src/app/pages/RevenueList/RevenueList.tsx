import React, { useEffect } from "react";
import RevenueCard from "./components/RevenueCard";
import useRevenueList from "./hooks/useRevenueList";

const RevenueList = () => {
  const { getRevenueListHandler , revenueList } = useRevenueList();

  useEffect(() => {
    getRevenueListHandler();
    console.log("-| getRevenueListHandler  useEffect |-", revenueList);
  }, []);
  
  return (
    <div className="px-[55px] pt-[115px]">
      <div>input</div>
      <div className="flex flex-col gap-2">
      {revenueList &&
        revenueList.length > 0 &&
        revenueList.map((revenue) => (
          <RevenueCard key={revenue.id} revenue={revenue} />
        ))}
      </div>
    </div>
  );
};

export default RevenueList;