import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRevenue from "./hooks/useRevenue";

const Revenue = () => {
  const {
    getRevenueHandler,
    sortByWeek,
    sortByMonth,
    sortByYear,
    getTotalCurency,
    getMinCurency,
    getMediumCurency,
    getMaxCurency,
    revenue,
    curencyList,
  } = useRevenue();
  const { item_id } = useParams();

  useEffect(() => {
    if (item_id) {
      getRevenueHandler(item_id);
    }
    console.log("-| getRevenueHandler useEffect |-", revenue);
  }, []);

  const { id, _id, data } = revenue;

  return (
    <div className="px-[55px] pt-[137px]">
      <div className="flex flex-col p-8 border border-[#E5E5E5] rounded gap-[22px]">
        <div className="flex flex-row justify-between">
          <div className="text-2xl font-bold text-[#333333]">Revenue</div>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`py-2 px-4 text-sm font-medium text-[#333333] 
              opacity-70 bg-white rounded-l-lg border border-[#E5E5E5] 
              hover:opacity-100 focus:z-10 focus:ring-0 focus:font-bold 
              focus:opacity-100`}
              onClick={sortByWeek}
            >
              Week
            </button>
            <button
              type="button"
              className={`py-2 px-4 text-sm font-medium text-[#333333] 
              opacity-70 bg-white border-t border-b border-[#E5E5E5] 
              hover:opacity-100 focus:z-10 focus:ring-0 focus:font-bold 
              focus:opacity-100`}
              onClick={sortByMonth}
            >
              Month
            </button>
            <button
              type="button"
              className={`py-2 px-4 text-sm font-medium text-[#333333] 
              opacity-70 bg-white rounded-r-md border border-[#E5E5E5] 
              hover:opacity-100 focus:z-10 focus:ring-0 focus:font-bold 
              focus:opacity-100`}
              onClick={sortByYear}
            >
              Year
            </button>
          </div>
        </div>
        <div className="h-10 bg-[#007AFF54] rounded"></div>
        <div className="flex flex-col">
          <div className="text-xs text-[#9C9C9C]">Total</div>
          <div className="text-2xl font-bold text-[#333333]">{`$ ${getTotalCurency()}`}</div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col">
            <div className="text-xs text-[#9C9C9C]">Min</div>
            <div className="text-2xl font-bold text-[#333333] opacity-80">{`$ ${getMinCurency()}`}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-[#9C9C9C]">Medium</div>
            <div className="text-2xl font-bold text-[#333333] opacity-80">{`$ ${getMediumCurency()}`}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-[#9C9C9C]">Max</div>
            <div className="text-2xl font-bold text-[#333333] opacity-80">{`$ ${getMaxCurency()}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
