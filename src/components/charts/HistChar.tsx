// @ts-nocheck
import { Chart } from 'react-chartjs-2';


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
  BarElement,
  registerables
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
  ...registerables
);

export const HistChart = ({ temp, humy, number }: any) => {
  console.log(temp, humy)

  const data = {
    datasets: [{
      type: 'bar',
      label: 'Temperature',
      data: temp,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    }, {
      type: 'line',
      label: 'Humidity',
      data: humy,
      backgroundColor: 'rgba(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.7)',
    }],
    labels: Array(number).fill('')
  };

  const options = {
    resposive: false,
    plugins: {
      legend: {
        display: true,
      }
    },
  };

  return (
    <div className="w-screen h-screen/3">
      <div className='text-xl'></div>
      <Chart data={data} options={options} />
    </div>
  );
};