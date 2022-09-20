import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useGetRevenueListMutation } from "../../../../store/api/revenueList.api";

const useRevenueList = () => {
  const { revenueList } = useTypedSelector((state) => state.revenueList);
  const { setRevenueList } = useActions();

  // api
  const [getRevenueList] = useGetRevenueListMutation();

  const getRevenueListHandler = async () => {
    try {
      const list = await getRevenueList(null).unwrap();
      setRevenueList(list);
      console.log("-| getRevenueListHandler |-", list);
    } catch (error) {}
  };

  const sortByName = (sortDirection: boolean) => {
    const sortedList = revenueList.slice(0);
    sortedList.sort((a, b) => {
      if ((sortDirection === true && a.name < b.name)||(sortDirection === false && a.name > b.name)) {
        return -1;
      } else {
        return 1;
      }
    });
    setRevenueList(sortedList);
    console.log("-| sortByName |-", sortedList);
  };
  const sortByDate = (sortDirection: boolean) => {
    const sortedList = revenueList.slice(0);
    if(sortDirection === true){
      sortedList.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else {
      sortedList.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }    
    setRevenueList(sortedList);
    console.log("-| sortByDate |-", sortedList);
  };
  const sortByState = (sortDirection: boolean) => {
    const sortedList = revenueList.slice(0);
    sortedList.sort((a) => {
      if ((sortDirection === true && a.isActive)||(sortDirection === false && !a.isActive)) {
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
