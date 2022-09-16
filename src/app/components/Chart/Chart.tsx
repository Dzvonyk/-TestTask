import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// import { Line } from "react-chartjs-2";
import { CurencyType } from "../../../types/RevenueType";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  data?: CurencyType[];
};

const Chart: React.FunctionComponent<Props> = ({ data }) => {
  var labels: any[] = [];
  data?.forEach((element) => {
    return (labels = [...labels, element.date]);
  });
  var labelsData: any[] = [];
  data?.forEach((element) => {
    if (element.curency === "null") {
      return (labelsData = [...labelsData, 0]);
    } else {
      return (labelsData = [...labelsData, element.curency]);
    }
  });

  const chartData: any = {
    labels: labels,
    datasets: [
      {
        label: "Revenue",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(0, 122, 255, 0.33)",
        borderColor: "#007AFF",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#007AFF",
        pointBackgroundColor: "#007AFF",
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#007AFF",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: labelsData,
      },
    ],
  };
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
