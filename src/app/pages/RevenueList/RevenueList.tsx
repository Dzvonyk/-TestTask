import React, { useEffect } from "react";
import RevenueCard from "./components/RevenueCard";
import useRevenueList from "./hooks/useRevenueList";

import { ReactComponent as IconSearch } from "./../../../assets/search.svg";


const RevenueList = () => {
  const { getRevenueListHandler, revenueList } = useRevenueList();

  useEffect(() => {
    getRevenueListHandler();
    console.log("-| getRevenueListHandler  useEffect |-", revenueList);
  }, []);

  return (
    <div className="px-[55px] pt-[115px]">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-[18px]">
          <IconSearch />
        </span>
        <input
          className="text-xs placeholder:text-[#6B7280] placeholder:opacity-50 block bg-[#F9FAFB] w-80 border border-[#E5E7EB] rounded-lg py-3 pl-11 pr-3 focus:outline-none focus:ring-0"
          placeholder="Search"
          type="text"
          name="search"
        />
      </label>

      <div className="flex flex-col border border-[#E5E7EB] rounded-lg overflow-hidden mt-[50px]">
        <div className="flex flex-row bg-[#F9FAFB] uppercase text-xs text-[#6B7280] font-medium justify-between">
          <div className="flex flex-row w-1/2">
            <div className="px-6 py-3 w-1/2 cursor-pointer">Name</div>
            <div className="px-6 py-3 w-1/2 cursor-pointer">Date</div>
          </div>
          <div className="px-6 py-3 w-2/12 cursor-pointer">state</div>
        </div>
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
