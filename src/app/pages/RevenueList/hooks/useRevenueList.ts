import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useGetRevenueListMutation } from "../../../../store/api/revenueList.api";

const useRevenueList = () => {
  const { revenueList } = useTypedSelector((state) => state.revenueList);
  const { setRevenueList } = useActions();
  console.log("-| revenueList |-", revenueList);

  // api
  const [getRevenueList] = useGetRevenueListMutation();

  const getRevenueListHandler = async () => {
    try {
      const list = await getRevenueList(null).unwrap();
      setRevenueList(list);
      console.log("-| getRevenueListHandler |-", list);
    } catch (error) {}
  };

  const sortByName = () => {
    const sortedList = revenueList.slice(0);
    sortedList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setRevenueList(sortedList);
    console.log("-| sortByName |-", sortedList);
  };
  const sortByDate = () => {
    const sortedList = revenueList.slice(0);
    sortedList.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    setRevenueList(sortedList);
    console.log("-| sortByDate |-", sortedList);
  };
  const sortByState = () => {
    const sortedList = revenueList.slice(0);
    sortedList.sort((a) => {
      if (a.isActive) {
        return -1;
      } else {
        return 1;
      }
    });
    setRevenueList(sortedList);
    console.log("-| sortByState |-", sortedList);
  };

  return {
    getRevenueListHandler,
    sortByName,
    sortByDate,
    sortByState,
    revenueList,
  };
};

export default useRevenueList;
