import moment from "moment";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useGetRevenueMutation } from "../../../../store/api/revenue.api";

const useRevenue = () => {
  const { revenue, curencyList } = useTypedSelector((state) => state.revenue);
  const { setRevenue, setCurencyList } = useActions();

  const dateWeek = moment().subtract(1, "w");
  const dateMonth = moment().subtract(1, "M");
  const dateYear = moment().subtract(1, "y");

  // setCurencyList(mock);
  // api
  const [getRevenue] = useGetRevenueMutation();

  const getRevenueHandler = async (id: string) => {
    try {
      const revenue = await getRevenue(id).unwrap();
      setRevenue(revenue);
      console.log("-| getRevenueHandler |-", revenue);
    } catch (error) {}
  };

  const sortByWeek = () => {
    const sortedByWeek = revenue.data
      .filter((object) => new Date(object.date) >= dateWeek.toDate())
      .slice(0);
    // const sortedByWeek = revenue.data.slice(0);
    setCurencyList(sortedByWeek);
    console.log("-| sortByWeek |-", sortedByWeek);
  };
  const sortByMonth = () => {
    const sortedByMonth = revenue.data
      .filter((object) => new Date(object.date) >= dateMonth.toDate())
      .slice(0);
    // const sortedByMonth = revenue.data.slice(0);
    setCurencyList(sortedByMonth);
    console.log("-| sortByMonth |-", sortedByMonth);
  };
  const sortByYear = () => {
    const sortedByYear = revenue.data
      .filter((object) => new Date(object.date) >= dateYear.toDate())
      .slice(0);
    // const sortedByYear = revenue.data.slice(0);
    setCurencyList(sortedByYear);
    console.log("-| sortByYear |-", sortedByYear);
  };

  const getTotalCurency = () => {
    // const total = curencyList.reduce((accumulator, object) => {
    //   return accumulator + object.curency;
    // }, 0);
    let total = 0;
    curencyList
      .filter((object) => object.curency !== "null")
      .forEach((element) => {
        total += Number(element.curency);
      });
    console.log("-| getTotalCurency |-", total);
    return total.toFixed(2);
  };
  const getMinCurency = () => {
    if (curencyList.length > 0) {
      const min = curencyList
        .filter((object) => object.curency !== "null")
        .reduce((previous, current) =>
          Number(previous.curency) < Number(current.curency)
            ? previous
            : current
        );
      console.log("-| getMinCurency |-", min);
      return Number(min.curency).toFixed(2);
    } else {
      return 0;
    }
  };
  const getMediumCurency = () => {
    let total = 0;
    let medium = 0;
    curencyList
      .filter((object) => object.curency !== "null")
      .forEach((element) => {
        total += Number(element.curency);
      });
    if (curencyList.length > 0) {
      medium = total / curencyList.length;
      return medium.toFixed(2);
    } else {
      return 0;
    }
  };
  const getMaxCurency = () => {
    if (curencyList.length > 0) {
      const max = curencyList
        .filter((object) => object.curency !== "null")
        .reduce((previous, current) =>
          Number(previous.curency) > Number(current.curency)
            ? previous
            : current
        );
      console.log("-| getMaxCurency |-", max);
      return Number(max.curency).toFixed(2);
    } else {
      return 0;
    }
  };

  return {
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
  };
};

export default useRevenue;
