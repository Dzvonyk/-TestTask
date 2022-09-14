import { useEffect } from "react";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useGetRevenueMutation } from "../../../../store/api/revenue.api";

const useRevenue = () => {
  const { revenue } = useTypedSelector((state) => state.revenue);
  const { setRevenue } = useActions();
  console.log("-| revenue |-", revenue);

  // api
  const [getRevenue] = useGetRevenueMutation();

  const getRevenueHandler = async (id: string) => {
    try {
      const revenue = await getRevenue(id).unwrap();
      setRevenue(revenue);
      console.log("-| getRevenueHandler |-", revenue);
    } catch (error) {}
  };

  return {
    getRevenueHandler,
    revenue
  };
};

export default useRevenue;