// RevenueCard
import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { GetRevenueListResponseType } from "../../../../../types/RevenueType";

type RevenueCardProps = {
    revenue: GetRevenueListResponseType;
  };

const RevenueCard: FunctionComponent<RevenueCardProps> = ({ revenue }) => {
  return (
    <NavLink
      to={`/item/${revenue.id}`}
    >
      {`${revenue.name} -|- ${revenue.date} -|- ${revenue.isActive}`}
    </NavLink>
  );
};

export default RevenueCard;