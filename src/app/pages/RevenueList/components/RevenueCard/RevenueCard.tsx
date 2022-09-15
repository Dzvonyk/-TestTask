// RevenueCard
import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { GetRevenueListResponseType } from "../../../../../types/RevenueType";
import dayjs from "dayjs";

type RevenueCardProps = {
  revenue: GetRevenueListResponseType;
};

const RevenueCard: FunctionComponent<RevenueCardProps> = ({ revenue }) => {
  const { name, date, isActive } = revenue;
  const Date = dayjs(date).format("DD.MM.YYYY");

  return (
    <NavLink to={`/item/${revenue.id}`}>
      <hr className=" w-full bg-[#E5E7EB]" />
      <div className="flex flex-row hover:bg-[#F6F6F6] text-sm justify-between">
        <div className="flex flex-row w-1/2">
          <div className="px-6 py-4 text-[#111827] font-medium w-1/2">
            {name}
          </div>
          <div className="px-6 py-4 text-[#6B7280] w-1/2">{Date}</div>
        </div>
        <div className="px-6 py-4 w-2/12">
          {isActive ? (
            <div className="text-[#5D5FEF]">Active</div>
          ) : (
            <div className="text-[#EF5DA8] ">Disable</div>
          )}
        </div>
      </div>
    </NavLink>
  );
};

export default RevenueCard;
