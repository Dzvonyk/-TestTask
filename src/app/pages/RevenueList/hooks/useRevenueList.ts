import { useEffect } from "react";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useGetRevenueListMutation } from "../../../../store/api/revenueList.api";

const useRevenueList = () => {
  const { revenueList } = useTypedSelector((state) => state.revenueList);
  const { setRevenueList } = useActions();
  console.log("-| revenueList |-", revenueList);

//   useEffect(() => {
//     getRevenueListHandler();
//     console.log("-| getRevenueListHandler revenueList |-", revenueList);
//   }, []);

  // api
  const [getRevenueList] = useGetRevenueListMutation();

  const getRevenueListHandler = async () => {
    try {
      const list = await getRevenueList(null).unwrap();
      setRevenueList(list);
      console.log("-| getRevenueListHandler |-", list);
    } catch (error) {}
  };

  return {
    getRevenueListHandler,
    revenueList
  };
};

export default useRevenueList;