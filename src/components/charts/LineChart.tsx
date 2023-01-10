import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const LineChart = ({ newData, number }: any) => {

  const color_list = ['rgb(255, 99, 132)', 'rgb(20, 19, 102)', 'rgb(255, 205, 86)', 'rgb(90, 255, 120)', 'rgb(90, 119, 255)']

  const datasets = newData.map((d: any, i: any) => {
    return {
      label: `Rp${i + 1}`,
      backgroundColor: color_list[i],
      borderColor: color_list[i],
      data: d,
      tension: 0.5,
    }
  })

  const data = {
    labels: Array(number).fill(''),
    datasets
  };

  const options = {
    resposive: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      }
    },
  };

  return (
    <div className="w-screen h-screen/3">
      <div className='text-xl'>Ligth Intensity Graph</div>
      <Line data={data} options={options} />
    </div>
  );
};